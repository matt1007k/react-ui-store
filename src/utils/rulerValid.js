import validator from 'validator'

export const rulerRegister = [
  {
    field: 'email',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an email address.'
  },
  { 
    field: 'email',
    method: validator.isEmail,
    validWhen: true,
    message: 'That is not a valid email.'
  },
  {
    field: 'password',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an password'
  },
  {
    field: 'confirmPassword',
    method: validator.isEmpty,
    //args: [{min: 21, max: 65}],
    validWhen: false,
    message: 'Please provide an password'
  }

] 

export const rulerLogin = [
  {
    field: 'email',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an email address.'
  },
  { 
    field: 'email',
    method: validator.isEmail,
    validWhen: true,
    message: 'That is not a valid email.'
  },
  {
    field: 'password',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an password'
  }

] 

export const rulerCategory = [
  {
    field: 'email',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an email address.'
  },
  { 
    field: 'email',
    method: validator.isEmail,
    validWhen: true,
    message: 'That is not a valid email.'
  },
  {
    field: 'password',
    method: validator.isEmpty,
    validWhen: false,
    message: 'Please provide an password'
  }
]