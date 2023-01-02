import React from 'react';
import Button from 'shared/components/Button';

import { Header, BoardName } from './Styles';

function ProjectBoardHeader() {
  return (
    <Header>
      <BoardName>Kanban board</BoardName>
      <Button icon="github">Github Repo</Button>
    </Header>
  );
}

export default ProjectBoardHeader;
