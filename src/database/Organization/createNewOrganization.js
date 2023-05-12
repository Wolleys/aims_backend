const { sequelize } = require("../dbConfig");

const createNewOrganization = async (model, newOrganization) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const isAlreadyAdded = await model.Organization.findOne({
            where: { email: newOrganization.email },
            attributes: ["email"],
        });
        if (isAlreadyAdded) {
            throw {
                status: 409,
                message: `'${newOrganization.email}' is already in use!`,
            };
        }

        const result = await model.Organization.create(newOrganization, {
            transaction,
        });

        const address = {
            ...newOrganization,
            organization_id: result.id,
        };

        const avatar = { organization_id: result.id };

        await model.OrganizationAddress.create(address, { transaction });
        await model.OrganizationAvatar.create(avatar, { transaction });
        await transaction.commit();

        // Destructure result object and seperate password field from the rest
        const { password, ...data } = await result.toJSON();
        return data;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewOrganization };
