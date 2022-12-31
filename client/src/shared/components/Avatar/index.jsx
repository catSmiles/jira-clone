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
  // avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
  avatarUrl: null,
  name: 'Trung',
  size: 32,
};

function Avatar({ className, avatarUrl, name, size, ...otherProps }) {
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  if (avatarUrl) {
    return <Image avatarUrl={avatarUrl} {...sharedProps} />;
  }

  return (
    <Letter color={getColorFromName(name)} {...sharedProps}>
      <span>{name.charAt(0)}</span>
    </Letter>
  );
}

const colors = [
  '#da7657',
  '#6ada57',
  '#5784da',
  '#aa57da',
  '#da5757',
  '#da5792',
  '#57daca',
  '#57a5da',
];

const getColorFromName = name => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
