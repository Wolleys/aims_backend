const aircraftService = require("../../services/aircraftService");

const createNewAircraft = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdAircraft = await aircraftService.createNewAircraft(
            organizationId,
            body
        );
        res.status(201).send({ status: "OK", data: createdAircraft });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewAircraft };
