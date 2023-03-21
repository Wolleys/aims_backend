const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? (page - 1) * limit : 1;

    return { limit, offset };
};

module.exports = { getPagination };
