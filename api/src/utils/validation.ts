// rules?
// 1. required
// 2. maxLength
// 3. minLength
// 4. notEmptyArray
// 5. url
// 6. oneOf

type Value = any;
type ErrorMessage = false | string; // why is false. False is meaning no error.

type FieldValues = { [key: string]: Value };
// imagine Validator? (value: Value, fieldValues?: FieldValues) => ErrorMessage
type Validator = (value: Value, fieldValues?: FieldValues) => ErrorMessage;
type FieldValidators = { [key: string]: Validator | Validator[] };
type FieldErrors = { [key: string]: string };

// imagine how to using rules
const is = {
  required: () => (value: Value): ErrorMessage =>
    isNilOrEmptyString(value) && 'This field is required',
  maxLength: (max: number) => (value: Value): ErrorMessage =>
    !!value && value.length > max && `Must be at least ${max} charaters`,
  // why using "!!value"? -> to convert boolean. Exp: (!!0 && 'message error') and (0 && 'message error') Because ErrorMessage give value (false | string)

  // imagine way define rule url
  // input: value
  // logic: using "RegExp.prototype.test()"
  // output: false or  error message (string)
  url: () => (value: Value): ErrorMessage =>
    !!value &&
    // eslint-disable-next-line no-useless-escape
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(value) &&
    'Must be a valid URL',

  // imagine way define oneOf
  // input
  // logic
  // output
  oneOf: (arr: any[]) => (value: Value): ErrorMessage =>
    !!value && !arr.includes(value) && `Must be one of: [${arr.join(', ')}]`,
};

const isNilOrEmptyString = (value: Value): boolean => {
  return value === null || value === undefined || value === '';
};

// imagine how to generate errors?
// input?
// logic?
// output?
export const generateErrors = (
  fieldValues: FieldValues,
  fieldValidators: FieldValidators,
): FieldErrors => {
  // imagine fieldValidators: {[key: string]: Validator | Validator[]} - Validator: (value: Value, fieldValues?: FieldValues) => ErrorMessage
  const fieldErrors: FieldErrors = {};
  Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
    // imagine validators like this: [ [function], [function] ]
    [validators].flat().forEach(validator => {
      const errorMessage = validator(fieldValues[fieldName], fieldValues);
      // check errorMessage - (!fieldErrors[fieldName]), check fieldErrors[fieldName] was exist
      // (errorMessage !== false && !fieldErrors[fieldName]), have and fieldError no exist
      if (errorMessage !== false && !fieldErrors[fieldName]) {
        // save error message
        fieldErrors[fieldName] = errorMessage; // save fieldError
      }
    });
  });

  return fieldErrors;
};

export default is;
