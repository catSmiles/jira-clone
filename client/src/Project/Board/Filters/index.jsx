import React from 'react';

const InfoUsers = [
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

import {
  Filters,
  SearchInput,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  ClearAll,
} from './Styles';
function FiltersBoard() {
  // const areFiltersCleared = true;
  const areFiltersCleared = false;
  return (
    <Filters data-testid="board-filters">
      <SearchInput icon="search" />
      <Avatars>
        {InfoUsers.map(user => (
          // <AvatarIsActiveBorder key={user.id} isActive>
          <AvatarIsActiveBorder key={user.id}>
            <StyledAvatar avatarUrl={user.avatarUrl} name={user.name} />
          </AvatarIsActiveBorder>
        ))}
      </Avatars>
      <StyledButton isActive variant="empty">
        Only My Issues
      </StyledButton>
      <StyledButton variant="empty">Recently Updated</StyledButton>
      {areFiltersCleared && <ClearAll>Clear all</ClearAll>}
    </Filters>
  );
}

export default FiltersBoard;
