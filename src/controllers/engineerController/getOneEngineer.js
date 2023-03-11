const engineerService = require("../../services/engineerService");

const getOneEngineer = async (req, res) => {
    const organizationId = req.params.organizationId;
    const engineerId = req.params.engineerId;
    try {
        const engineer = await engineerService.getOneEngineer(
            organizationId,
            engineerId
        );
        res.send({ status: "OK", data: engineer });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneEngineer };
