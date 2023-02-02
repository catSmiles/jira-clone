import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from './Styles';

const arrText = ['Projects', 'singularity 1.0', 'Kanban Board'];

const propTypes = {
  items: PropTypes.array.isRequired,
};

function Breadcrumbs(props) {
  const { items } = props;

  return (
    <Container>
      {items.map((text, index) => (
        <Fragment key={index}>
          {index !== 0 && <Divider>/</Divider>}
          {text}
        </Fragment>
      ))}
    </Container>
  );
}

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
