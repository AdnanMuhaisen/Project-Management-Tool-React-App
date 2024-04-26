function validateDateInputValue(dateValue) {
  if (!new Date(dateValue)) {
    return "Invalid date value";
  }
}

function validateUserInputs(title, description, date) {
  let errors = [];
  if (title === "" || title === undefined) {
    errors.push("Invalid project title!");
  }

  if (description === "" || description === undefined) {
    errors.push("Invalid project description!");
  }
  let dateValidationResult = validateDateInputValue(date);
  if (dateValidationResult) {
    errors.push(dateValidationResult);
  }
  return errors;
}

export { validateDateInputValue, validateUserInputs };
