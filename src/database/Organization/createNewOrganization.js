const { sequelize } = require("../dbConfig");
const { Organization } = require("./organizationModel");
const { OrganizationAvatar } = require("../OrganizationAvatar/organizationAvatarModel");
const { OrganizationAddress } = require("../OrganizationAddress/organizationAddressModel");

const createNewOrganization = async (newOrganization) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const isAlreadyAdded = await Organization().findOne({
            where: { email: newOrganization.email },
            attributes: ["email"],
        });
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `'${newOrganization.email}' is already in use!`,
            };
        }

        const createdOrganization = await Organization().create(newOrganization, {
            transaction,
        });

        const address = {
            ...newOrganization,
            organization_id: createdOrganization.id,
        };

        const avatar = {
            organization_id: createdOrganization.id,
        }

        await OrganizationAddress().create(address, { transaction });
        await OrganizationAvatar().create(avatar, { transaction });
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
