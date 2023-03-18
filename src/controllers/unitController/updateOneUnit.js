const unitService = require("../../services/unitService");

const updateOneUnit = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const unitId = req.params.unitId;
    try {
        await unitService.updateOneUnit(organizationId, unitId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneUnit };
