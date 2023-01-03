import React from 'react';
import PropTypes from 'prop-types';

import { TypeIcon } from './Styles';

const propTypes = {
  type: PropTypes.string.isRequired,
};

function IssueTypeIcon({ type, ...otherProps }) {
  return <TypeIcon type={type} color={type} size={18} {...otherProps} />;
}

IssueTypeIcon.propTypes = propTypes;

export default IssueTypeIcon;
