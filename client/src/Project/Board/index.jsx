import React from 'react';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';
import Input from 'shared/components/Input';

function Board() {
  return (
    <>
      <Breadcrumbs />
      <Header />
      <Input icon="search" />
      <Input invalid={true} />
      <Input />
      <Avatar />
      <Avatar />
      <Avatar />
    </>
  );
}

export default Board;
