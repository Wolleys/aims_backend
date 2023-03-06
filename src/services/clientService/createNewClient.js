const createNewClient = (newClient, organizationId) => {
    const clientToInsert = {
        ...newClient,
        organizationId
    };
    return;
};

module.exports = { createNewClient };
