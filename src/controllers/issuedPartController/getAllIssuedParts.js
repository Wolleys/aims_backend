const issuedPartService = require("../../services/issuedPartService");

const getAllIssuedParts = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allIssuedParts = await issuedPartService.getAllIssuedParts(
            organizationId
        );
        res.send({ status: "OK", data: allIssuedParts });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllIssuedParts };
