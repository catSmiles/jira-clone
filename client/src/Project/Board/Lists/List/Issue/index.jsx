import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import IssueTypeIcon from 'shared/components/IssueTypeIcon';
import IssuePriorityIcon from 'shared/components/IssuePriorityIcon';
import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar } from './Styles';

const infoAssignees = [
  {
    id: '1',
    avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    name: 'Pickle Rick',
  },
  {
    id: '2',
    avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    name: 'Baby Yoda',
  },
  {
    id: '3',
    avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    name: 'Lord Gaben',
  },
];

function ProjectBoardListIssue() {
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {() => (
        <IssueLink>
          <Issue>
            <Title>Click on an issue to see what's behind it.</Title>
            <Bottom>
              <div>
                <IssueTypeIcon type="task" />
                <IssuePriorityIcon priority="2" top={-1} left={4} />
              </div>
              <Assignees>
                {infoAssignees.map(user => (
                  <AssigneeAvatar
                    key={user.id}
                    avatarUrl={user.avatarUrl}
                    name={user.name}
                    size={24}
                  />
                ))}
              </Assignees>
            </Bottom>
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
}

export default ProjectBoardListIssue;
