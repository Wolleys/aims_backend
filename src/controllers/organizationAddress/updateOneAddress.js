const OrganizationAddress = require("../../services/organizationAddress");

const updateOneAddress = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const updatedOrganization = await OrganizationAddress.updateOneAddress(
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

module.exports = { updateOneAddress };
