const { getModels } = require("../dbConfig");
const User = () => getModels().User;

module.exports = { User };
