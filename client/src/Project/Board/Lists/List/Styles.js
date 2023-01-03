import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  min-height: 400px;
  width: 25%;
  border-radius: 3px;
  background-color: ${color.backgroundLightest};

  overflow: hidden;
`;
export const Title = styled.div`
  // padding: 13px 10px 17px;
  padding: 13px 0 17px;
  margin: 0 10px;

  color: ${color.textMedium};
  text-transform: uppercase;
  ${font.size(12.5)};
  ${mixin.truncateText};
`;

export const IssuesCount = styled.span`
  ${font.size(13)};
  text-transform: lowercase;
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;
