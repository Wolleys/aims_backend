const userService = require("../../services/userService");

const getAllUsers = async (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send("Get all users");
};

module.exports = { getAllUsers };
