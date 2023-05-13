const authService = require("../../services/authService");
const { createToken } = require("../../middlewares/auth/jwt");

const login = async (req, res) => {
    const body = req.body;
    const model = req.models;
    try {
        const loggedInUser = await authService.login(model, body);
        const claims = { id: loggedInUser.id };
        const jwt = createToken(claims); // Serialize user using the secrect key

        // Save refreshToken with current user
        await model.Organization.update(
            { refresh_token: jwt.refreshToken },
            { where: { id: loggedInUser.id } }
        );

        let options = {
            // secure: true,
            httpOnly: true,
            // sameSite: "None",
            maxAge: 20 * 60 * 1000, // Expires in 20min
        };

        res.cookie("jwt", jwt.refreshToken, options);
        res.status(200).send({ auth: true, token: jwt.accessToken });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { login };
