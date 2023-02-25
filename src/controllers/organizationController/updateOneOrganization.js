const organizationService = require("../../services/organizationService");

const updateOneOrganization = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    if (!organizationId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':organizationId' can't be empty" },
        });
    }
    try {
        const updatedOrganization = await organizationService.updateOneOrganization(
            organizationId,
            body
        );
        res.send({ status: "OK", data: updatedOrganization });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneOrganization };
