const { getModels } = require("../dbConfig");
const UserAvatar = () => getModels().UserAvatar;

module.exports = { UserAvatar };