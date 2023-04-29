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

const verifyToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
        return res
            .status(401)
            .send({ auth: false, message: "You are not authenticated!" });
    }
    try {
        const claims = verify(accessToken, env.ACCESS_TOKEN_SECRET);
        req.user = claims;
    } catch (error) {
        res.clearCookie("access-token");
        return res.status(403).send({ auth: false, message: "Invalid token" });
    }
    return next();
};

module.exports = { createToken, verifyToken };
