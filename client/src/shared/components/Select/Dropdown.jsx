import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  dropdownWidth: PropTypes.number,
};

const defaultProps = {
  dropdownWidth: undefined,
};

function SelectDropdown({
  dropdownWidth
}) {
  return <p>Dropdown items</p>;
}



export default SelectDropdown;
