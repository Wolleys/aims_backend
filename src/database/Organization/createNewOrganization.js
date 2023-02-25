const { sequelize } = require("../dbConfig");
const { model } = require("./organizationModel");
const { OrganizationAddress } = require("../OrganizationAddress/organizationAddressModel");

const createNewOrganization = async (newOrganization) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const isAlreadyAdded = await model().findOne({
            where: { email: newOrganization.email },
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newOrganization.email}' is already in use!`,
            };
        }

        const createdOrganization = await model().create(newOrganization, {
            transaction,
        });

        const address = {
            country: newOrganization.country,
            address_line_1: newOrganization.address_line_1,
            address_line_2: newOrganization.address_line_2,
            city: newOrganization.city,
            region: newOrganization.region,
            postal_code: newOrganization.postal_code,
            organizationId: createdOrganization.id,
        };

        await OrganizationAddress().create(address, { transaction });
        await transaction.commit();
        return createdOrganization;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewOrganization };
