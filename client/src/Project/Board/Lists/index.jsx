import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import List from './List';
import { Lists } from './Styles';

function ProjectBoardList() {
  return (
    <DragDropContext>
      <Lists>
        <List />
        <List />
        <List />
        <List />
      </Lists>
    </DragDropContext>
  );
}

export default ProjectBoardList;
