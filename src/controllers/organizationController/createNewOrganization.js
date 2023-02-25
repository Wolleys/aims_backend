const organizationService = require("../../services/organizationService");

const createNewOrganization = async (req, res) => {
    const body = req.body;
    try {
        const createdOrganization = await organizationService.createNewOrganization(
            body
        );
        res.status(201).send({ status: "OK", data: createdOrganization });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewOrganization };
