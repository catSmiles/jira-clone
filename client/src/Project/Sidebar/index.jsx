import React from 'react';

import ProjectAvatar from 'shared/components/ProjectAvatar';
import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  LinkItem,
  LinkText,
  Devider,
  NotImplemented,
} from './Styles';
import Icon from 'shared/components/Icon';
// import { NavLink } from 'react-router-dom';

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

      {renderLinkItem('Kanban Board', 'board', '/board')}
      {renderLinkItem('Project settings', 'settings', '/settings')}

      <Devider />

      {renderLinkItem('Releases', 'shipping')}
      {renderLinkItem('Issues and filters', 'issues')}
      {renderLinkItem('Pages', 'page')}
      {renderLinkItem('Reports', 'reports')}
      {renderLinkItem('Components', 'component')}
    </Sidebar>
  );
}

const renderLinkItem = (text, iconType, path) => {
  const isImplemented = !!path;

  // const LinkItemProps = isImplemented ? { as: NavLink, expect: true, to: path } : { as: 'div' };
  const LinkItemProps = isImplemented ? { as: 'a' } : { as: 'div' };

  return (
    <LinkItem {...LinkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not Implemented</NotImplemented>}
    </LinkItem>
  );
};

export default ProjectSidebar;
