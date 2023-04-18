const issuedPartService = require("../../services/issuedPartService");

const deleteOneIssuedPart = async (req, res) => {
    const issuedPartId = req.params.issuedPartId;
    const organizationId = req.params.organizationId;

    await issuedPartService.deleteOneIssuedPart(organizationId, issuedPartId);
    res.send("Delete an existing issued part");
};

module.exports = { deleteOneIssuedPart };
