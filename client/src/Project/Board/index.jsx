import React from 'react';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';

function Board() {
  return (
    <>
      <Breadcrumbs />
      <Header />
      <Avatar />
      <Avatar />
      <Avatar />
    </>
  );
}

export default Board;
