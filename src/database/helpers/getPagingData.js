const getPagingData = (data, pageSize, pageLimit) => {
    const limit = parseInt(pageLimit);
    const page = parseInt(pageSize);

    const { count: totalItems, rows: results } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const nextPage =
        endIndex < totalItems
            ? (results.next = {
                page: page + 1,
                limit: limit,
            })
            : null;

    const previousPage =
        startIndex > 0
            ? (results.previous = {
                page: page - 1,
                limit: limit,
            })
            : null;

    return {
        totalItems,
        previousPage,
        currentPage,
        nextPage,
        totalPages,
        results,
    };
};

module.exports = { getPagingData };
