const apicache = require("apicache");
const env = process.env;

const cache = () => {
    return apicache.middleware(env.CACHE_TTL);
};

module.exports = { cache };
