const hangarUseService = require("../../services/hangarUseService");

const getOneIssuedPart = async (req, res) => {
    const issuedPartId = req.params.issuedPartId;
    const organizationId = req.params.organizationId;
    try {
        const issuedPart = await hangarUseService.getOneIssuedPart(
            organizationId,
            issuedPartId
        );
        res.send({ status: "OK", data: issuedPart });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneIssuedPart };
