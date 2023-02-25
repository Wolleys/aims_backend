const organizationService = require("../../services/organizationService");

const getAllOrganizations = async (req, res) => {
    try {
        const allOrganizations = await organizationService.getAllOrganizations();
        res.send({ status: "OK", data: allOrganizations });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllOrganizations };
