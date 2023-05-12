const organizationService = require("../../services/organizationService");

const getAllOrganizations = async (req, res) => {
    const model = req.models;
    try {
        const allOrganizations = await organizationService.getAllOrganizations(
            model
        );
        res.send({ status: "OK", data: allOrganizations });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllOrganizations };
