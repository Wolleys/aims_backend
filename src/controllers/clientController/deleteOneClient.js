const clientService = require("../../services/clientService");

const deleteOneClient = async (req, res) => {
    const clientId = req.params.clientId;
    const organizationId = req.params.organizationId;
    try {
        const deletedClient = await clientService.deleteOneClient(
            organizationId,
            clientId
        );
        res.status(200).json({ status: "OK", data: deletedClient });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { deleteOneClient };
