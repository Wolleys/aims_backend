const authService = require("../../services/authService");
const { createToken } = require("../../middlewares/auth/jwt");

const login = async (req, res) => {
    const body = req.body;
    try {
        const loggedInUser = await authService.login(body);
        const accessToken = createToken({ id: loggedInUser.id });

        res.cookie("access-token", accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        res.status(200).send({ auth: true, data: createdAircraft });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { login };
