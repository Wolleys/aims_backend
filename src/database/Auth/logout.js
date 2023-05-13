const logout = async (model, cookies) => {
    try {
        const verifyCookies = !cookies?.jwt;
        if (verifyCookies) {
            throw { status: 200, message: "You are logged out!" };
        }
        const refreshTkn = cookies.jwt;

        // Check if user has a valid refresh token cookie in the db
        const orgUser = await model.Organization.findOne({
            where: { refresh_token: refreshTkn },
            attributes: ["id", "refresh_token"],
        });
        return orgUser;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { logout };
