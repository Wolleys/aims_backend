const { getModels } = require("../dbConfig");
const ClientAvatar = () => getModels().ClientAvatar;

module.exports = { ClientAvatar };