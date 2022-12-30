import React from 'react';

import { Container, Divider } from './Styles';

const arrText = ['Projects', 'singularity 1.0', 'Kanban Board'];

function Breadcrumbs() {
  return (
    <Container>
      {arrText.map((text, index) => (
        <>
          {index !== 0 && <Divider>/</Divider>}
          {text}
        </>
      ))}
    </Container>
  );
}

export default Breadcrumbs;
