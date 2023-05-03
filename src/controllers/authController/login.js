const authService = require("../../services/authService");
const { createToken } = require("../../middlewares/auth/jwt");

const login = async (req, res) => {
    const body = req.body;
    const model = req.models;
    try {
        const loggedInUser = await authService.login(model, body);
        const claims = { id: loggedInUser.id };
        const accessToken = createToken(claims); // Serialize user using the secrect key

        let options = {
            secure: true,
            httpOnly: true,
            sameSite: "None",
            maxAge: 20 * 60 * 1000, // Expires in 20min
        };

        res.cookie("access-token", accessToken, options);
        res.status(200).send({ auth: true, token: accessToken });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { login };
