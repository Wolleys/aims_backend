const userService = require("../../services/userService");

const deleteOneUser = async (req, res) => {
    const deletedUser = userService.deleteOneUser();
    res.send("Delete an existing user");
};

module.exports = { deleteOneUser };
