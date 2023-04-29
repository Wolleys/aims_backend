const yup = require("yup");

const authSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().min(5).max(15).required("Required"),
});

module.exports = { authSchema };
