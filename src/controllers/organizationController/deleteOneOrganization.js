const organizationService = require("../../services/organizationService");

const deleteOneOrganization = async (req, res) => {
    const model = req.models;
    const organizationId = req.params.organizationId;
    try {
        await organizationService.deleteOneOrganization(model, organizationId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneOrganization };
