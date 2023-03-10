const User = require("../../database/User");

const getOneUser = (organizationId, userId) => {
    try {
        const user = User.getOneUser(organizationId, userId);
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { getOneUser };
