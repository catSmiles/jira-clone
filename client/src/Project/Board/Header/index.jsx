import React from 'react';

import Button from 'shared/components/Button';

import { Header, BoardName } from './Styles';

function ProjectBoardHeader() {
  return (
    <Header>
      <BoardName>Kanban board</BoardName>
      <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
        <Button icon="github">Github Repo</Button>
      </a>
    </Header>
  );
}

export default ProjectBoardHeader;
