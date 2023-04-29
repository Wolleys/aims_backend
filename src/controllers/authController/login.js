const authService = require("../../services/authService");

const login = async (req, res) => {
    const body = req.body;

    const loggedInUser = await authService.login(body);
    res.send("Login user");
};

module.exports = { login };
