const authService = require("../../services/authService");

const logout = async (req, res) => {
    const body = req.body;
    const model = req.models;
    const logoutUser = await authService.logout(model, body);
    res.send("Logout user");
};

module.exports = { logout };
