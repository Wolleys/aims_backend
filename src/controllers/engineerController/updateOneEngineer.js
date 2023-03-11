const engineerService = require("../../services/engineerService");

const updateOneEngineer = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const engineerId = req.params.engineerId;
    try {
        const updatedEngineer = await engineerService.updateOneEngineer(
            organizationId,
            engineerId,
            body
        );
        res.send({ status: "OK", data: updatedEngineer });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneEngineer };
