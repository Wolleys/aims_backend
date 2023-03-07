const clientService = require("../../services/clientService");

const createNewClient = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    try {
        const createdClient = await clientService.createNewClient(
            body,
            organizationId
        );
        res.status(201).send({ status: "OK", data: createdClient });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { createNewClient };
