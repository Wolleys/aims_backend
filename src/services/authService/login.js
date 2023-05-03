const Auth = require("../../database/Auth");

const login = (model, user) => {
    try {
        const loggedInUser = Auth.login(model, user);
        return loggedInUser;
    } catch (error) {
        throw error;
    }
};

module.exports = { login };
