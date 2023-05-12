const Auth = require("../../database/Auth");

const logout = (model, user) => {
    const logoutUser = Auth.logout(model, user);
    return logoutUser;
};

module.exports = { logout };
