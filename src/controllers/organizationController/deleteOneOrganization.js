const organizationService = require("../../services/organizationService");

const deleteOneOrganization = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const organization = await organizationService.deleteOneOrganization(
            organizationId
        );
        res.status(200).json({ status: "OK", data: organization });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneOrganization };
