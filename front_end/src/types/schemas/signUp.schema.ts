import * as yup from 'yup'

export const SignUpSchema1 = yup.object().shape({
  name: yup
    .string()
    .required('Username is required')
    .min(4, 'At least 4 characters'),
  username: yup.string().required('username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[0-9]/, 'Password must have at least one number')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must have at least one special character'
    ),
})

export const SignUpSchema2 = yup.object().shape({
  email: yup.string().email('Not valid email address').required()
})
