import *as Yup from 'yup';

export const Loginvalidation = Yup.object().shape({
  email:Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(3,'Too short')
    .required('Password is required')
});