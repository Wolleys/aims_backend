const userService = require("../../services/userService");

const getOneUser = async (req, res) => {
    const organizationId = req.params.organizationId;
    const userId = req.params.userId;
    try {
        const user = await userService.getOneUser(organizationId, userId);
        res.send({ status: "OK", data: user });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneUser };
