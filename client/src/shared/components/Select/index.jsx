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
 */

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'empty']),
  invalid: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  variant: 'normal',
  invalid: false,
};

function Select({ children, className, variant, invalid }) {
  return (
    <StyledSelect className={className} tabIndex="0" variant={variant} invalid={invalid}>
      {children}
      <ValueContainer>{/* value input or select appearance here */}</ValueContainer>
      {/* Dropdown items appearance here */}
      {/* <Dropdown /> */}
    </StyledSelect>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
