const aircraftService = require("../../services/aircraftService");

const getAllAircrafts = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allAircrafts = await aircraftService.getAllAircrafts(organizationId);
        res.send({ status: "OK", data: allAircrafts });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllAircrafts };
