import React, { Fragment } from 'react';

import { Container, Divider } from './Styles';

const arrText = ['Projects', 'singularity 1.0', 'Kanban Board'];

function Breadcrumbs() {
  return (
    <Container>
      {arrText.map((text, index) => (
        <Fragment key={index}>
          {index !== 0 && <Divider>/</Divider>}
          {text}
        </Fragment>
      ))}
    </Container>
  );
}

export default Breadcrumbs;
