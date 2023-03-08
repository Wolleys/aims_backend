const aircraftService = require("../../services/aircraftService");

const deleteOneAircraft = async (req, res) => {
    const aircraftId = req.params.aircraftId;
    const organizationId = req.params.organizationId;
    try {
        const deletedAircraft = await aircraftService.deleteOneAircraft(
            organizationId,
            aircraftId
        );
        res.status(200).json({ status: "OK", data: deletedAircraft });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneAircraft };
