const bcrypt = require("bcryptjs");

// Hash the supplied user password
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

// Validate the supplied user password
const validatePassword = async (password, dbPassword) => {
    try {
        const match = await bcrypt.compare(password, dbPassword);
        if (!match) {
            return res.status(401).json({ auth: false, error: "Invalid password" });
        }
        return match;
    } catch (error) {
        throw error;
    }
};

module.exports = { hashPassword, validatePassword };
