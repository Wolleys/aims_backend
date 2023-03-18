const organizationService = require("../../services/organizationService");

const updateOneOrganization = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        await organizationService.updateOneOrganization(organizationId, body);
        res.send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneOrganization };
