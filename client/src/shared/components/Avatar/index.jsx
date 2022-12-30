import React from 'react';
import PropTypes from 'prop-types';

import { Image, Letter } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  name: '',
  size: 32,
};

function Avatar({ className, avatarUrl, name, size, ...otherProps }) {
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };
  return <Image avatarUrl={avatarUrl} {...sharedProps} />;
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
