import React, { Fragment } from 'react';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Routes from './Routes';
import './fontStyles.css';
function App() {
  return (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Routes />
    </Fragment>
  );
}

export default App;
