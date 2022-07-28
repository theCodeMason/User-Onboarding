import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be at least 3 characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    tos: yup
        .boolean()
        .oneOf([true], 'Acceptance required')
})

export default formSchema;
