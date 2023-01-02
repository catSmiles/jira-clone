import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './Styles';

const fontIconCodes = {
  [`search`]: '\\e907',
  [`plus`]: '\\e906',
  [`help`]: '\\e905',
  [`board`]: '\\e904',
  [`settings`]: '\\e909',
  [`shipping`]: '\\e91c',
  [`issues`]: '\\e908',
  [`page`]: '\\e919',
  [`reports`]: '\\e91b',
  [`component`]: '\\e91a',
  [`github`]: '\\e915',
};

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 16,
  left: 0,
  top: 0,
};

const Icon = ({ type, ...iconProps }) => (
  <StyledIcon {...iconProps} data-testid={`icon:${type}`} code={fontIconCodes[type]} />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
