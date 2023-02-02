import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import Icon from 'shared/components/Icon';
import Filters from './Filters';
import Lists from './Lists';

import Select from 'shared/components/Select';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

function Board(props) {
  const { project, fetchProject, updateLocalProjectIssues } = props;

  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Kanban Board']} />
      {/* <Header /> */}
      {/* <Filters /> */}
      <h2>Styles Select: ValueContainer</h2>
      <Select>variant = normal</Select>
      <hr style={{ paddingTop: '300px' }} />
      <Select dropdownWidth={150}>width is 150</Select>
      {/* <Lists /> */}
    </Fragment>
  );
}

export default Board;
