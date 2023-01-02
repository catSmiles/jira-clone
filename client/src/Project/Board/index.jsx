import React from 'react';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import Icon from 'shared/components/Icon';
import Filters from './Filters';

function Board() {
  return (
    <>
      <Breadcrumbs />
      <Header />
      <Filters />
    </>
  );
}

export default Board;
