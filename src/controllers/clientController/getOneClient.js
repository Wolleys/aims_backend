const clientService = require("../../services/clientService");

const getOneClient = async (req, res) => {
    const organizationId = req.params.organizationId;
    const clientId = req.params.clientId;
    try {
        const client = await clientService.getOneClient(organizationId, clientId);
        res.send({ status: "OK", data: client });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getOneClient };
