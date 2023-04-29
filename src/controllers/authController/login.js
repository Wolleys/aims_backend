const authService = require("../../services/authService");

const login = async (req, res) => {
    const body = req.body;
    try {
        const loggedInUser = await authService.login(body);
        res.status(200).send({ status: "OK", data: loggedInUser });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                data: { auth: false, error: error?.message || error },
            });
    }
};

module.exports = { login };
