const userService = require("../../services/userService");

const updateOneUser = async (req, res) => {
    const updatedUser = userService.updateOneUser();
    res.send("Update an existing user");
};

module.exports = { updateOneUser };
