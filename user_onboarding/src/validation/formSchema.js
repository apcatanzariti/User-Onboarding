import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required!')
        .min(3, 'Must be at least 3 characters long!'),
    email: yup
        .string()
        .required('Valid email required!')
        .email('Email must be at least 7 characters long!'),
    password: yup
        .string()
        .required('Password is required!')
        .min(3, 'Password must be at least 3 characters long!'),
    terms: yup
        .boolean()
});