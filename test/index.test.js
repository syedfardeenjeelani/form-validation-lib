const {
    validateRequired,
    validateEmail,
    validateMinLength,
    validateMaxLength,
    validateAlphanumeric,
    validateNumeric,
    validateRange,
    validatePasswordComplexity,
    validateDate,
    validatePhoneNumber,
    validateURL,
    validateMatch
  } = require('../index');
  
  test('validateRequired should return true for non-empty input', () => {
    expect(validateRequired('test')).toBe(true);
  });
  
  test('validateRequired should return error message for empty input', () => {
    expect(validateRequired('')).toBe('This field is required');
  });
  
  test('validateEmail should return true for valid email', () => {
    expect(validateEmail('example@domain.com')).toBe(true);
  });
  
  test('validateEmail should return error message for invalid email', () => {
    expect(validateEmail('invalid-email')).toBe('Invalid email address');
  });
  
  test('validateMinLength should return true for input with sufficient length', () => {
    expect(validateMinLength('test', 3)).toBe(true);
  });
  
  test('validateMinLength should return error message for input with insufficient length', () => {
    expect(validateMinLength('test', 5)).toBe('Minimum length is 5');
  });
  
  test('validateMaxLength should return true for input within maximum length', () => {
    expect(validateMaxLength('test', 5)).toBe(true);
  });
  
  test('validateMaxLength should return error message for input exceeding maximum length', () => {
    expect(validateMaxLength('testtest', 5)).toBe('Maximum length is 5');
  });
  
  test('validateAlphanumeric should return true for alphanumeric input', () => {
    expect(validateAlphanumeric('test123')).toBe(true);
  });
  
  test('validateAlphanumeric should return error message for non-alphanumeric input', () => {
    expect(validateAlphanumeric('test@123')).toBe('Only letters and numbers are allowed');
  });
  
 
  
  test('validateNumeric should return true for numeric input', () => {
    expect(validateNumeric('123')).toBe(true);
  });
  
  test('validateNumeric should return error message for non-numeric input', () => {
    expect(validateNumeric('abc')).toBe('Must be a number');
  });
  
  test('validateRange should return true for value within range', () => {
    expect(validateRange(5, 1, 10)).toBe(true);
  });
  
  test('validateRange should return error message for value out of range', () => {
    expect(validateRange(11, 1, 10)).toBe('Must be between 1 and 10');
  });
  
  test('validatePasswordComplexity should return true for complex password', () => {
    expect(validatePasswordComplexity('Password1!')).toBe(true);
  });
  
  test('validatePasswordComplexity should return error message for simple password', () => {
    expect(validatePasswordComplexity('password')).toBe('Password must include uppercase, lowercase, numbers, and special characters');
  });
  
  test('validateDate should return true for valid date format', () => {
    expect(validateDate('2024-09-17')).toBe(true);
  });
  
  test('validateDate should return error message for invalid date format', () => {
    expect(validateDate('09/17/2024')).toBe('Invalid date format');
  });
  
  test('validatePhoneNumber should return true for valid phone number', () => {
    expect(validatePhoneNumber('+123-456-7890')).toBe(true);
  });
  
  test('validatePhoneNumber should return error message for invalid phone number', () => {
    expect(validatePhoneNumber('123')).toBe('Invalid phone number');
  });
  
  test('validateURL should return true for valid URL', () => {
    expect(validateURL('https://example.com')).toBe(true);
  });
  
  test('validateURL should return error message for invalid URL', () => {
    expect(validateURL('example')).toBe('Invalid URL');
  });
  
  test('validateMatch should return true for matching values', () => {
    expect(validateMatch('password', 'password')).toBe(true);
  });
  
  test('validateMatch should return error message for non-matching values', () => {
    expect(validateMatch('password1', 'password')).toBe('Fields do not match');
  });
  