const clientService = require("../../services/clientService");

const getAllClients = async (req, res) => {
    const organizationId = req.params.organizationId;
    try {
        const allClients = await clientService.getAllClients(organizationId);
        res.send({ status: "OK", data: allClients });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = { getAllClients };
