import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import { StyledSelect, ValueContainer } from './Styles';

/**
  Status of select
  1. No select. It's time select is clear.

  2. Selected. It's time select was dirty
    - when clicked
      + mostly, show input + show all dropdown items it's have (No include item was selected).

  3. Image TypeIssues using Select component???
    - How to do TypeIssues tell Select I want change width dropdow on Select?
      + ask: one props take care width dropdown on Select. Call name is "dropdownWidth"

  4. In case TypeIssues using Select, what are data Select recived? and what are call name?
    - data are Select recived calling: value and options

  5. In step 4, yup we have value and what we do now?
    - I think something like that - I could pass something like it can be render UI maybe in Select
    and how to could them?
    - I need some props to do that
    - That is an idea. Try it on
    - I have using something props to do that and call name are:
      + renderValue
      + renderOption
    - Next, I image way to used them
    - What data are pass throw in this props?
      + a function
      + or just data
      + Why are using function? and why don't used function?
      + Why are using data? and why don't used data?
      - function first, I can pass a function that is render any UI what would i want, now ui (data) is flexible
      in this way when I pass throw a function in Select component, i can handle logic to call function that
      (function render UI) to render UI I want.
      - second pass just data, I can define a function in Select and handle logic to excute them,
      Now i have a problem. That function render ui in Select is fixed. That mean
      I'm can't control what UI I want render when used Select component in other palce project.
      --> sumery: I choose way pass a function into props renderValue and renderOption. Because, I want to control
      what UI I want. Not it's fixed.

  6. What next?
  - I need one props can handle clear value are they?
    + Yes, but how i do that?
    + Just define it like a props!
    + I'm call name is withClearValue
  - And finaly, I think need one props for onChange

 */

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([ 'normal', 'empty' ]),
  invalid: PropTypes.bool,
  name: PropTypes.string,
  // value: PropTypes.oneOfType[ PropTypes.string ],
  // options: PropTypes.array.isRequired,
  renderValue: PropTypes.func,
  renderOption: PropTypes.func,
  // withClearValue: PropTypes.bool.isRequired,
  // onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  variant: 'normal',
  invalid: false,
  name: undefined,
  // value: undefined,
  renderValue: undefined,
  renderOption: undefined
};

function Select({
  children,
  className,
  variant,
  invalid,
  name,
  dropdownWidth,
  value,
  options,
  renderValue,
  renderOption,
  // withClearValue
  // onChange
}) {
  return (
    <StyledSelect
      className={className}
      tabIndex="0"
      variant={variant}
      invalid={invalid}
    >
      <ValueContainer
        variant={variant}
        data-testid={name ? `select:${name}` : 'select'}
      >
        {children}
      </ValueContainer>
      <Dropdown
        dropdownWidth={dropdownWidth}
        value={value}
        options={options}
      />
    </StyledSelect>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
