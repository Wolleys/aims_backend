const userService = require("../../services/userService");

const updateOneUser = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const userId = req.params.userId;
    try {
        const updatedUser = await userService.updateOneUser(
            organizationId,
            userId,
            body
        );
        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneUser };
