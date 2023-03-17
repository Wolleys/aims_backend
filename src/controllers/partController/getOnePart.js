const partService = require("../../services/partService");

const getOnePart = async (req, res) => {
    const organizationId = req.params.organizationId;
    const partId = req.params.partId;
    try {
        const part = await partService.getOnePart(organizationId, partId);
        res.send({ status: "OK", data: part });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOnePart };
