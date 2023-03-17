const unitService = require("../../services/unitService");

const deleteOneUnit = async (req, res) => {
    const unitId = req.params.unitId;
    const organizationId = req.params.organizationId;
    try {
        await unitService.deleteOneUnit(organizationId, unitId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneUnit };
