const userService = require("../../services/userService");

const getAllUsers = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allUsers = await userService.getAllUsers(organizationId);
        res.send({ status: "OK", data: allUsers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllUsers };
