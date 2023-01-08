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
      <Select>Styled select</Select>
      <Select invalid>Styled select have invalid prop</Select>
      <Select variant="empty">Styled select with variant is empty</Select>
      <Select variant="empty" invalid>
        Styled select have invalid and variant is empty
      </Select>
      {/* <Lists /> */}
    </>
  );
}

export default Board;
