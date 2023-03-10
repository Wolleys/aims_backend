const User = require("../../database/User");

const deleteOneUser = (organizationId, userId) => {
    try {
        const user = User.deleteOneUser(organizationId, userId);
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { deleteOneUser };
