import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, Text, StyledSpinner } from './Styles';
import Icon from 'shared/components/Icon';
import { color } from 'shared/utils/styles';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'empty']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: 'secondary',
  icon: undefined,
  iconSize: 18,
  disabled: false,
  isWorking: false,
};

function Button({ children, variant, icon, iconSize, disabled, isWorking, ...buttonProps }) {
  return (
    <StyledButton
      {...buttonProps}
      variant={variant}
      disabled={disabled || isWorking}
      isWorking={isWorking}
      iconOnly={!children}
    >
      {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

      {!isWorking && icon && typeof icon === 'string' ? <Icon type={icon} size={iconSize} /> : icon}

      {children && <Text withPadding={icon || isWorking}>{children}</Text>}
    </StyledButton>
  );
}

const getIconColor = variant =>
  ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff';

Button.prototype = propTypes;
Button.defaultProps = defaultProps;

export default Button;
