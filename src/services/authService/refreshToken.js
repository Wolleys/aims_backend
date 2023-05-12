const Auth = require("../../database/Auth");

const refreshToken = (model, user) => {
    const token = Auth.refreshToken(model, user);
    return token;
};

module.exports = { refreshToken };
