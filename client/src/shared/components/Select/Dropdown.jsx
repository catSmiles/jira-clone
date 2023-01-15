import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownInput, Options, Option } from './Styles';

const propTypes = {
  dropdownWidth: PropTypes.number,
};

const defaultProps = {
  dropdownWidth: undefined,
};

function SelectDropdown({ dropdownWidth, value, options, withClearValue, onChange }) {
  return (
    <Dropdown width={dropdownWidth}>
      <DropdownInput
        type="text"
      />
      <Options>
        <Option>Item 1</Option>
        <Option>Item 2</Option>
        <Option>Item 3</Option>
      </Options>

    </Dropdown>
  )
}

export default SelectDropdown;
