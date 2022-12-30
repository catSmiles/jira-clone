import styled from 'styled-components';

import { mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100%;
  ${props => mixin.backgroundImage(props.avatarUrl)};
`;

export const Letter = styled.div``;
