const organizationService = require("../../services/organizationService");

const getOneOrganization = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const organization = await organizationService.getOneOrganization(
            organizationId
        );
        res.send({ status: "OK", data: organization });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneOrganization };
