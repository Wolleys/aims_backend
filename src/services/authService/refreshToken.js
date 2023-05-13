const Auth = require("../../database/Auth");

const refreshToken = (model, cookies) => {
    const token = Auth.refreshToken(model, cookies);
    return token;
};

module.exports = { refreshToken };
