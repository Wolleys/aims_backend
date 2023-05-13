const { sign, verify } = require("jsonwebtoken");
const env = process.env;

const refreshToken = async (model, cookies) => {
    try {
        const verifyCookies = !cookies?.jwt;
        if (verifyCookies) {
            throw { status: 401, message: "You are not authenticated!" };
        }
        const refreshTkn = cookies.jwt;

        // Check if user has a valid refresh token cookie in the db
        const orgUser = await model.Organization.findOne({
            where: { refresh_token: refreshTkn },
            attributes: ["id", "refresh_token"],
        });
        if (!orgUser) {
            throw { status: 403, message: "Forbidden: Invalid token" };
        }

        // Verify the found refresh token cookie
        const data = verify(refreshTkn, env.REFRESH_TOKEN_SECRET);
        if (orgUser.id !== data.id) {
            throw { status: 403, message: "Invalid token" };
        }

        // Issue a new access token
        const accessToken = sign({ id: data.id }, env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30s",
        });
        return accessToken;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { refreshToken };
