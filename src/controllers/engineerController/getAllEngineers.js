const engineerService = require("../../services/engineerService");

const getAllEngineers = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allEngineers = await engineerService.getAllEngineers(organizationId);
        res.send({ status: "OK", data: allEngineers });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllEngineers };
