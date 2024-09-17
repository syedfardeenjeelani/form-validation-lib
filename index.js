// Function to validate required fields
const validateRequired = (value, message = "This field is required") => {
  return value.trim().length > 0 ? true : message;
};

// Function to validate email format
const validateEmail = (value, message = "Invalid email address") => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? true : message;
};

// Function to validate minimum length
const validateMinLength = (
  value,
  min,
  message = `Minimum length is ${min}`
) => {
  return value.length >= min ? true : message;
};

// Function to validate maximum length
const validateMaxLength = (
  value,
  max,
  message = `Maximum length is ${max}`
) => {
  return value.length <= max ? true : message;
};
///  validateAlphanumeric
const validateAlphanumeric = (
  value,
  message = "Only letters and numbers are allowed"
) => {
  const alphanumericRegex = /^[a-zA-Z0-9]*$/;
  return alphanumericRegex.test(value) ? true : message;
};

  

/// Must be a number
const validateNumeric = (value, message = "Must be a number") => {
    return !isNaN(value) && value !== '' ? true : message;
  };
  

// Validate range
const validateRange = (value, min, max, message = `Must be between ${min} and ${max}`) => {
    return value >= min && value <= max ? true : message;
  };

  // password complexcity
  const validatePasswordComplexity = (value, message = 'Password must include uppercase, lowercase, numbers, and special characters') => {
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return complexityRegex.test(value) ? true : message;
  };

  //validateDate
  
  const validateDate = (value, message = 'Invalid date format') => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value) ? true : message;
  };

  // validatePhoneNumber
  const validatePhoneNumber = (value, message = 'Invalid phone number') => {
    const phoneRegex = /^[+]?[0-9\s()-]{7,}$/;
    return phoneRegex.test(value) ? true : message;
  };
// validateURLvalidateURL
  const validateURL = (value, message = 'Invalid URL') => {
    const urlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    return urlRegex.test(value) ? true : message;
  };

  // validateMatch
  const validateMatch = (value, compareTo, message = 'Fields do not match') => {
    return value === compareTo ? true : message;
  };
  
  
  
  

// Export the functions
module.exports = {
    validatePhoneNumber,
  validateRequired,
  validateDate,
  validateMatch,
  validateEmail,
  validateURL,
  validateMinLength,
  validateNumeric,
  validateMaxLength,
  validateAlphanumeric,
  validateRange,
  validatePasswordComplexity,
};
