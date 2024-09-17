
# Form Validation Library

## Description

`form-validation-lib` is a simple and customizable JavaScript library designed for handling form validation and error messages in web applications. It provides a set of validation functions to ensure that user inputs meet specific criteria, such as required fields, valid email addresses, password complexity, and more.

## Installation

To install the library, use npm:

```bash
npm install form-validation-lib
```

## Usage

### Importing the Library

First, import the validation functions into your project:

```javascript
const {
  validateRequired,
  validateEmail,
  validateMinLength,
  validateMaxLength,
  validateAlphanumeric,
  validateSpecialChars,
  validateNumeric,
  validateRange,
  validatePasswordComplexity,
  validateDate,
  validatePhoneNumber,
  validateURL,
  validateMatch
} = require('form-validation-lib');
```

### Available Functions

#### `validateRequired(value, message)`

- **Description:** Validates that the input is not empty.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"This field is required"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateEmail(value, message)`

- **Description:** Validates the format of an email address.
- **Parameters:**
  - `value` (string): The email address to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Invalid email address"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateMinLength(value, min, message)`

- **Description:** Validates that the input meets the minimum length requirement.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `min` (number): The minimum length requirement.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Minimum length is X"`, where X is the minimum length.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateMaxLength(value, max, message)`

- **Description:** Validates that the input does not exceed the maximum length.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `max` (number): The maximum length requirement.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Maximum length is X"`, where X is the maximum length.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateAlphanumeric(value, message)`

- **Description:** Validates that the input contains only letters and numbers.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Only letters and numbers are allowed"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateSpecialChars(value, allowedChars, message)`

- **Description:** Validates that the input contains only allowed special characters.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `allowedChars` (string): A string of allowed special characters.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Allowed characters: X"`, where X is the allowed characters.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateNumeric(value, message)`

- **Description:** Validates that the input is a number.
- **Parameters:**
  - `value` (string | number): The input value to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Must be a number"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateRange(value, min, max, message)`

- **Description:** Validates that the input is within a specified range.
- **Parameters:**
  - `value` (number): The input value to validate.
  - `min` (number): The minimum value.
  - `max` (number): The maximum value.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Must be between X and Y"`, where X is the minimum and Y is the maximum.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validatePasswordComplexity(value, message)`

- **Description:** Validates the complexity of a password.
- **Parameters:**
  - `value` (string): The password to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Password must include uppercase, lowercase, numbers, and special characters"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateDate(value, message)`

- **Description:** Validates the format of a date (YYYY-MM-DD).
- **Parameters:**
  - `value` (string): The date to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Invalid date format"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validatePhoneNumber(value, message)`

- **Description:** Validates the format of a phone number.
- **Parameters:**
  - `value` (string): The phone number to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Invalid phone number"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateURL(value, message)`

- **Description:** Validates the format of a URL.
- **Parameters:**
  - `value` (string): The URL to validate.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Invalid URL"`.
- **Returns:** `true` if valid; otherwise, the error message.

#### `validateMatch(value, compareTo, message)`

- **Description:** Validates that the input matches a specified value.
- **Parameters:**
  - `value` (string): The input value to validate.
  - `compareTo` (string): The value to compare against.
  - `message` (string, optional): The error message to return if validation fails. Default is `"Fields do not match"`.
- **Returns:** `true` if valid; otherwise, the error message.

## Running Tests

To run tests for the library, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/syedfardeenjeelani/form-validation-lib).

## Contact

For any questions or feedback, you can reach me at [Syed Fardeen Jeelani](https://github.com/syedfardeenjeelani).
```

You can copy and paste this content directly into your `README.md` file for your `form-validation-lib` project.