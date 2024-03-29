const partService = require("../../services/partService");

const getAllParts = async (req, res) => {
    const { page, size, q } = req.query;
    const organizationId = req.params.organizationId;
    try {
        const allParts = await partService.getAllParts(
            organizationId,
            page,
            size,
            q
        );
        res.send({ status: "OK", data: allParts });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllParts };
