import styled, { css } from 'styled-components';

import Icon from 'shared/components/Icon';
import { color, font } from 'shared/utils/styles';

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
`;

export const InputElement = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 7px;
  ${props => props.hasIcon && `padding-left: 32px;`};
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLightest};
  color: ${color.textDarkest};
  transition: background-color 0.1s;
  ${font.regular};
  ${font.size(15)};
  &:hover {
    background-color: ${color.backgroundLight};
  }
  &:focus {
    background-color: #fff;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }
  ${props =>
    props.invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;

export const StyledIcon = styled(Icon)`
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${color.textMedium};
`;
