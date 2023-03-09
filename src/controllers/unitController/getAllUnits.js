const unitService = require("../../services/unitService");

const getAllUnits = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allUnits = await unitService.getAllUnits(organizationId);
        res.send({ status: "OK", data: allUnits });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllUnits };
