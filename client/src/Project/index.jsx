import React from 'react';
import { ProjectPage } from './Styles';
import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';

function Project() {
  return (
    <ProjectPage>
      <NavbarLeft />
      <Sidebar />
    </ProjectPage>
  );
}

export default Project;
