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

const getOneOrganization = async (req, res) => {
    const organizationId = req.params.organizationId;
    if (!organizationId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':organizationId' can't be empty" },
        });
    }
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

const deleteOneOrganization = async (req, res) => {
    const organizationId = req.params.organizationId;
    if (!organizationId) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':organizationId' can't be empty" },
        });
    }
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

module.exports = {
    getAllOrganizations,
    getOneOrganization,
    createNewOrganization,
    updateOneOrganization,
    deleteOneOrganization,
};
