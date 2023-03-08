const aircraftService = require("../../services/aircraftService");

const updateOneAircraft = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const aircraftId = req.params.aircraftId;
    try {
        const updatedAircraft = await aircraftService.updateOneAircraft(
            organizationId,
            aircraftId,
            body
        );
        res.send({ status: "OK", data: updatedAircraft });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneAircraft };
