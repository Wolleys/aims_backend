const Auth = require("../../database/Auth");

const login = (user) => {
    try {
        const loggedInUser = Auth.login(user);
        return loggedInUser;
    } catch (error) {
        throw error;
    }
};

module.exports = { login };
