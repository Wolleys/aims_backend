const authService = require("../../services/authService");

const logout = async (req, res) => {
    const model = req.models;
    const cookies = req.cookies;
    try {
        const logoutUser = await authService.logout(model, cookies);
        let options = {
            // secure: true,
            httpOnly: true,
            sameSite: "None",
        };

        if (!logoutUser) {
            res.clearCookie("jwt", options);
            res.status(200).send({ auth: false, message: "You are logged out!" });
        }

        // Delete user refreshToken from db
        await model.Organization.update(
            { refresh_token: null },
            { where: { id: logoutUser.id } }
        );

        res.clearCookie("jwt", options); // Delete the accessToken also on client
        res.status(200).send({ auth: false, message: "Logout successfully!" });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { logout };
