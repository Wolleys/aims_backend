const authService = require("../../services/authService");

const refreshToken = async (req, res) => {
    const model = req.models;
    const cookies = req.cookies;
    try {
        const token = await authService.refreshToken(model, cookies);
        res.status(200).send({ auth: true, token: token });
    } catch (error) {
        res.status(error?.status || 500).send({
            auth: false,
            data: { error: error?.message || error },
        });
    }
};

module.exports = { refreshToken };
