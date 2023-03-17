const { sequelize } = require("../dbConfig");
const { Engineer } = require("./engineerModel");
const { checkOrganization } = require("../helpers/checkOrganization");
const { EngineerAvatar } = require("../EngineerAvatar/engineerAvatarModel");

const createNewEngineer = async (organizationId, newEngineer) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const isIdNumber = await Engineer().findOne({
            where: {
                id_number: newEngineer.id_number,
                organization_id: organizationId,
            },
            attributes: ["id_number", "organization_id"],
        });
        if (isIdNumber) {
            throw {
                status: 400,
                message: `'${newEngineer.id_number}' has already been added!`,
            };
        }

        const isStaffNumber = await Engineer().findOne({
            where: {
                staff_number: newEngineer.staff_number,
                organization_id: organizationId,
            },
            attributes: ["staff_number", "organization_id"],
        });
        if (isStaffNumber) {
            throw {
                status: 400,
                message: `'${newEngineer.staff_number}' has already been added!`,
            };
        }

        const isEmail = await Engineer().findOne({
            where: { email: newEngineer.email, organization_id: organizationId },
            attributes: ["email", "organization_id"],
        });
        if (isEmail) {
            throw {
                status: 400,
                message: `'${newEngineer.email}' has already been added!`,
            };
        }

        const createdEngineer = await Engineer().create(newEngineer, {
            transaction,
        });

        const avatar = {
            engineer_id: createdEngineer.id,
        };

        await EngineerAvatar().create(avatar, { transaction });
        await transaction.commit();

        return createdEngineer;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewEngineer };
