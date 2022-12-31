import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, InputElement, StyledIcon } from './Styles';

const propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  invalid: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  icon: undefined,
  invalid: false,
};

function Input({ className, icon, ...inputProps }) {
  console.log({ ...inputProps });
  return (
    <StyledInput className={className}>
      {icon && <StyledIcon type={icon} size={15} />}
      <InputElement {...inputProps} hasIcon={!!icon} />
    </StyledInput>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
