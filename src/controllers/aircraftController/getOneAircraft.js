const aircraftService = require("../../services/aircraftService");

const getOneAircraft = async (req, res) => {
    const organizationId = req.params.organizationId;
    const aircraftId = req.params.aircraftId;
    try {
        const aircraft = await aircraftService.getOneAircraft(
            organizationId,
            aircraftId
        );
        res.send({ status: "OK", data: aircraft });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneAircraft };
