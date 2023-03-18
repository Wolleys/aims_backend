const { sequelize } = require("../dbConfig");
const { Engineer } = require("./engineerModel");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { checkOrganization } = require("../helpers/checkOrganization");
const { EngineerAvatar } = require("../EngineerAvatar/engineerAvatarModel");

const createNewEngineer = async (organizationId, newEngineer) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        // Check if id number already exists
        const idNumCol = "id_number";
        const idNumVal = newEngineer.id_number;
        const idNumAttrs = ["id_number", "organization_id"];
        await isAlreadyAdded(Engineer, idNumCol, idNumVal, organizationId, idNumAttrs);

        // Check if staff number already exists
        const staffNumCol = "staff_number";
        const staffNumVal = newEngineer.staff_number;
        const staffNumAttrs = ["staff_number", "organization_id"];
        await isAlreadyAdded(Engineer, staffNumCol, staffNumVal, organizationId, staffNumAttrs);
    
        // Check if email already exists
        const emailCol = "email";
        const emailVal = newEngineer.email;
        const emailAttrs = ["email", "organization_id"];
        await isAlreadyAdded(Engineer, emailCol, emailVal, organizationId, emailAttrs);

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
