import React from 'react';
import { Redirect, Route, useHistory, useRouteMatch } from 'react-router-dom';

import { ProjectPage } from './Styles';
import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';

import useApi from 'shared/hooks/api';
import PageLoader from 'shared/components/PageLoader';
import PageError from 'shared/components/PageError';

function Project() {
  const match = useRouteMatch();

  const [{ data, error, setLocalData }, fetchProject] = useApi.get('/project');

  if (!data) return <PageLoader />;
  if (error) return <PageError />;

  const { project } = data;

  const updateLocalProjectIssues = () => {};
  console.log(project);

  return (
    <ProjectPage>
      <NavbarLeft />
      <Sidebar />

      <Route
        path={`${match.path}/board`}
        render={() => (
          <Board
            project={project}
            fetchProject={fetchProject}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      />

      {match.isExact && <Redirect to={`${match.url}/board`} />}
    </ProjectPage>
  );
}

export default Project;
