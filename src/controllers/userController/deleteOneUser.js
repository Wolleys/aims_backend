const userService = require("../../services/userService");

const deleteOneUser = async (req, res) => {
    const userId = req.params.userId;
    const organizationId = req.params.organizationId;
    try {
        await userService.deleteOneUser(organizationId, userId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneUser };
