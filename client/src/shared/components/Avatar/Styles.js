import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100%;
  ${props => mixin.backgroundImage(props.avatarUrl)};
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  color: #fff;
  background-color: ${props => props.color};
  border-radius: 100%;

  text-transform: uppercase;
  ${font.medium};
  ${props => font.size(Math.round(props.size / 1.7))};
  
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
