const unitService = require("../../services/unitService");

const getOneUnit = async (req, res) => {
    const organizationId = req.params.organizationId;
    const unitId = req.params.unitId;
    try {
        const unit = await unitService.getOneUnit(organizationId, unitId);
        res.send({ status: "OK", data: unit });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneUnit };
