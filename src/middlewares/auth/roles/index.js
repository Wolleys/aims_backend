// Check if user is an admin
const verifyRoles = (req, res, next) => {
    const isAdmin = req.user.role;
    if (isAdmin !== "Admin") {
        return res
            .status(401)
            .send({ auth: false, message: "Unauthorized action!" });
    }
    next();
};

module.exports = { verifyRoles };
