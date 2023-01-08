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
 */

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([ 'normal', 'empty' ]),
  invalid: PropTypes.bool,
  name: PropTypes.string,
  // value: PropTypes.oneOfType[ PropTypes.string ],
  // options: PropTypes.array.isRequired,
};

const defaultProps = {
  className: undefined,
  variant: 'normal',
  invalid: false,
  name: undefined,
  // value: undefined,
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
