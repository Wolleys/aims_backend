const User = require("../../database/User");

const updateOneUser = (organizationId, userId, changes) => {
    try {
        const user = User.updateOneUser(organizationId, userId, changes);
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { updateOneUser };
