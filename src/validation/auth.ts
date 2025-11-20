import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(5).required('Password is required'),
});

export const registerSchema = yup.object().shape({
  username: yup.string().min(4).required('Email is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(5).required('Password is required'),
});
