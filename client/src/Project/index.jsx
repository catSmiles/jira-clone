import React from 'react';
import { ProjectPage } from './Styles';
import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';

function Project() {
  return (
    <ProjectPage>
      <NavbarLeft />
      <Sidebar />
      <Board />
    </ProjectPage>
  );
}

export default Project;
