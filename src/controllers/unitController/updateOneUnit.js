const unitService = require("../../services/unitService");

const updateOneUnit = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const unitId = req.params.unitId;
    try {
        const updatedUnit = await unitService.updateOneUnit(
            organizationId,
            unitId,
            body
        );
        res.send({ status: "OK", data: updatedUnit });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneUnit };
