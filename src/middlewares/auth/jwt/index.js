const { sign, verify } = require("jsonwebtoken");
const env = process.env;

const createToken = (claims) => {
    try {
        const accessToken = sign(claims, env.ACCESS_TOKEN_SECRET);
        return accessToken;
    } catch (error) {
        throw error;
    }
};

module.exports = { createToken };
