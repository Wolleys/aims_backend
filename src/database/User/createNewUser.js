const { User } = require("./userModel");
const { sequelize } = require("../dbConfig");
const { UserAvatar } = require("../UserAvatar/userAvatarModel");
const { checkOrganization } = require("../helpers/checkOrganization");

const createNewUser = async (organizationId, newUser) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        await checkOrganization(organizationId);

        const isIdNumber = await User().findOne({
            where: { id_number: newUser.id_number, organizationId },
            attributes: ["id_number", "organizationId"],
        });
        if (isIdNumber) {
            throw {
                status: 400,
                message: `'${newUser.id_number}' has already been added!`,
            };
        }

        const isStaffNumber = await User().findOne({
            where: { staff_number: newUser.staff_number, organizationId },
            attributes: ["staff_number", "organizationId"],
        });
        if (isStaffNumber) {
            throw {
                status: 400,
                message: `'${newUser.staff_number}' has already been added!`,
            };
        }

        const isEmail = await User().findOne({
            where: { email: newUser.email, organizationId },
            attributes: ["email", "organizationId"],
        });
        if (isEmail) {
            throw {
                status: 400,
                message: `'${newUser.email}' has already been added!`,
            };
        }

        const createdUser = await User().create(newUser, {
            transaction,
        });

        const avatar = {
            userId: createdUser.id,
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
