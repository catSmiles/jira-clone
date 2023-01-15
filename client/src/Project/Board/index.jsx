import React from 'react';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import Icon from 'shared/components/Icon';
import Filters from './Filters';
import Lists from './Lists';

import Select from 'shared/components/Select';

function Board() {
  return (
    <>
      {/* <Breadcrumbs /> */}
      {/* <Header /> */}
      {/* <Filters /> */}
      <h2>Styles Select: ValueContainer</h2>
      <Select>variant = normal</Select>
      <hr style={{ paddingTop: '300px' }} />
      <Select dropdownWidth={150}>width is 150</Select>
      {/* <Lists /> */}
    </>
  );
}

export default Board;
