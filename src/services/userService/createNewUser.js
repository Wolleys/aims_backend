const User = require("../../database/User");

const createNewUser = (organizationId, newUser) => {
    const userToInsert = {
        ...newUser,
        organizationId,
    };

    try {
        const createdUser = User.createNewUser(organizationId, userToInsert);
        return createdUser;
    } catch (error) {
        throw error;
    }
};

module.exports = { createNewUser };
