import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Avatar from 'shared/components/Avatar';

export const IssueLink = styled.a`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(9, 30, 66, 0.25);
  transition: background-color 0.1s;
  ${mixin.clickable};
  &:hover {
    background-color: ${color.backgroundLight};
  }
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)};
  @media (max-width: 1100px) {
    ${font.size(14.5)};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;
export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0px 0px 0px 2px #fff;
`;
