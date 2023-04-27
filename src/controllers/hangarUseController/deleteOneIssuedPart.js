const hangarUseService = require("../../services/hangarUseService");

const deleteOneIssuedPart = async (req, res) => {
    const issuedPartId = req.params.issuedPartId;
    const organizationId = req.params.organizationId;
    try {
        await hangarUseService.deleteOneIssuedPart(organizationId, issuedPartId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneIssuedPart };
