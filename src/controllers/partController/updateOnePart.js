const partService = require("../../services/partService");

const updateOnePart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const partId = req.params.partId;
    try {
        await partService.updateOnePart(organizationId, partId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOnePart };
