import React from 'react';
import { ProjectPage } from './Styles';
import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';

function Project() {
  return (
    <ProjectPage>
      <NavbarLeft />
      <Sidebar />
      <h2>Board</h2>
    </ProjectPage>
  );
}

export default Project;
