

export const validateForm = (schema: any, validationMessages:string, formInputs:string, formErrors = {}) => {

  const { error } = schema.validate(formInputs, { abortEarly: false });

  if (error) {
    error.details.forEach((detail: string) => {
      formErrors[detail.path[0]] = validationMessages[detail.path[0]];
    });

    return formErrors

  } else {
    // Submit form data to server
    let noErrors = {};
    return noErrors
  }
};
