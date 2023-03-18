const aircraftService = require("../../services/aircraftService");

const updateOneAircraft = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const aircraftId = req.params.aircraftId;
    try {
        await aircraftService.updateOneAircraft(organizationId, aircraftId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneAircraft };
