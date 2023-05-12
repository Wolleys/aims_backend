const authService = require("../../services/authService");

const refreshToken = async (req, res) => {
    const body = req.body;
    const model = req.models;
    const token = await authService.refreshToken(model, body);
    res.send("Refresh user token");
};

module.exports = { refreshToken };
