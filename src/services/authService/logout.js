const Auth = require("../../database/Auth");

const logout = (model, cookies) => {
    const logoutUser = Auth.logout(model, cookies);
    return logoutUser;
};

module.exports = { logout };
