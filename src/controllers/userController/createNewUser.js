const userService = require("../../services/userService");

const createNewUser = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdUser = await userService.createNewUser(organizationId, body);
        res.status(201).send({ status: "OK", data: createdUser });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewUser };
