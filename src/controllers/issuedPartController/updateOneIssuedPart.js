const issuedPartService = require("../../services/issuedPartService");

const updateOneIssuedPart = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const issuedPartId = req.params.issuedPartId;
    try {
        await issuedPartService.updateOneIssuedPart(
            organizationId,
            issuedPartId,
            body
        );
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneIssuedPart };
