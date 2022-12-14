import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './Styles';

function ProjectBoardList() {
  return (
    <Droppable droppableId="droppable-1">
      {() => (
        <List>
          <Title>
            BACKLOG <IssuesCount>2</IssuesCount>
          </Title>

          <Issues>
            <Issue />
            <Issue />
            <Issue />
          </Issues>
        </List>
      )}
    </Droppable>
  );
}

export default ProjectBoardList;
