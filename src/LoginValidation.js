import *as Yup from 'yup';

export const Loginvalidation = Yup.object().shape({
  username:Yup.string()
    .min('3','Username must be greater than 3')
    .required('Username is required'),
  password: Yup.string()
    .min(3,'Too short')
    .required('Password is required')
});