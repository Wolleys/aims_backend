const yup = require("yup");
const { phoneRegExp } = require("../regex/phoneRegExp");

const newOrganization = yup.object({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    organization_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
    website: yup.string().url("Invalid URL").nullable(),
    password: yup.string().min(5).max(15).required("Required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

module.exports = { newOrganization };
