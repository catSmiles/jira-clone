import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

export const BoardName = styled.div`
  ${font.size(24)};
  ${font.medium};
`;
