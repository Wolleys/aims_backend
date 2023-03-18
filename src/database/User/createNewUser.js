const { User } = require("./userModel");
const { sequelize } = require("../dbConfig");
const { isAlreadyAdded } = require("../helpers/isAlreadyAdded");
const { UserAvatar } = require("../UserAvatar/userAvatarModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewUser = async (organizationId, newUser) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        // Check if id number already exists
        const idNumCol = "id_number";
        const idNumVal = newUser.id_number;
        const idNumAttrs = ["id_number", "organization_id"];
        await isAlreadyAdded(User, idNumCol, idNumVal, organizationId, idNumAttrs);

        // Check if staff number already exists
        const staffNumCol = "staff_number";
        const staffNumVal = newUser.staff_number;
        const staffNumAttrs = ["staff_number", "organization_id"];
        await isAlreadyAdded(User, staffNumCol, staffNumVal, organizationId, staffNumAttrs);

        // Check if email already exists
        const emailCol = "email";
        const emailVal = newUser.email;
        const emailAttrs = ["email", "organization_id"];
        await isAlreadyAdded(User, emailCol, emailVal, organizationId, emailAttrs);

        const createdUser = await User().create(newUser, {
            transaction,
        });

        const avatar = {
            user_id: createdUser.id,
        };

        await UserAvatar().create(avatar, { transaction });
        await transaction.commit();

        return createdUser;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { createNewUser };
