const userService = require("../../services/userService");

const createNewUser = async (req, res) => {
    const createdUser = userService.createNewUser();
    res.send("Create a new user");
};

module.exports = { createNewUser };
