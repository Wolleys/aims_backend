const yup = require("yup");
const { phoneRegExp } = require("../regex/phoneRegExp");

const userSchema = yup.object({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    id_number: yup.string().required("Required"),
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
    gender: yup.string().required("Required"),
    hire_date: yup.date().required("Required"),
    staff_number: yup.string().required("Required"),
    user_role: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    user_status: yup.string().nullable(),
});

module.exports = { userSchema };
