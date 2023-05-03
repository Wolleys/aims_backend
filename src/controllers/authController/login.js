const authService = require("../../services/authService");
const { createToken } = require("../../middlewares/auth/jwt");

const login = async (req, res) => {
    const body = req.body;
    try {
        const loggedInUser = await authService.login(body);
        const claims = { id: loggedInUser.id };
        const accessToken = createToken(claims); //Serialize user using the secrect key

        res.cookie("access-token", accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.status(200).send({ auth: true, token: accessToken });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { login };
