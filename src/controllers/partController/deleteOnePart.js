const partService = require("../../services/partService");

const deleteOnePart = async (req, res) => {
    const partId = req.params.partId;
    const organizationId = req.params.organizationId;
    try {
        await partService.deleteOnePart(organizationId, partId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOnePart };
