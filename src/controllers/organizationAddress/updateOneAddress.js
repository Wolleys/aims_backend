const OrganizationAddress = require("../../services/organizationAddress");

const updateOneAddress = async (req, res) => {
    const body = req.body;
    const model = req.models;
    const organizationId = req.params.organizationId;
    try {
        await OrganizationAddress.updateOneAddress(model, organizationId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneAddress };
