const clientService = require("../../services/clientService");

const updateOneClient = async (req, res) => {
    const body = req.body;
    const organizationId = req.params.organizationId;
    const clientId = req.params.clientId;
    try {
        const updatedClient = await clientService.updateOneClient(
            organizationId,
            clientId,
            body
        );
        res.send({ status: "OK", data: updatedClient });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { updateOneClient };
