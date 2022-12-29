import React from 'react';

import ProjectAvatar from 'shared/components/ProjectAvatar';
import { Sidebar, ProjectInfo, ProjectTexts, ProjectName, ProjectCategory } from './Styles';

function ProjectSidebar() {
  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>singularity 1.0</ProjectName>
          <ProjectCategory>Software project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>
    </Sidebar>
  );
}

export default ProjectSidebar;
