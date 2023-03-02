const userService = require("../../services/userService");

const getOneUser = async (req, res) => {
    const user = userService.getOneUser();
    res.send("Get an existing user");
};

module.exports = { getOneUser };
