import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'any.required': 'Contact type is required',
      'any.only': 'Contact type must be one of [work, home, personal]',
    }),
});

// const dataToValidate = {
//     name: 'Lyudmyla',
//     phoneNumber: '1234567890',
//     email: 'john.doe@example.com',
//     isFavourite: true,
//     contactType: 'work',
//   };

//   const validationResult = createContactSchema.validate(dataToValidate, {
//     abortEarly: false,
//   });

//   if (validationResult.error) {
//     console.error(validationResult.error.details);
//   } else {
//     console.log('Data is valid!');
//   };

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
  }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .optional()
    .messages({
      'string.base': 'Contact type should be a string',
      'any.only': 'Contact type must be one of [work, home, personal]',
    }),
});
