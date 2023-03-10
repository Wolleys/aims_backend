const User = require("../../database/User");

const getAllUsers = (organizationId) => {
    try {
        const allUsers = User.getAllUsers(organizationId);
        return allUsers;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllUsers };
