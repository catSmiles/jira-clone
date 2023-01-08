import { color, font, mixin } from 'shared/utils/styles';
import styled, { css } from 'styled-components';

export const StyledSelect = styled.div`
  position: relative;
  border-radius: 4px;
  ${font.size(14)};
  ${mixin.clickable};

  ${props => props.variant === 'empty' && `display: inline-block;`};
  ${props =>
    props.variant === 'normal' &&
    css`
      width: 100%;
      border: 1px solid ${color.borderLightest};
      background-color: ${color.backgroundLightest};
      transition: background-color 0.1s;
      &:hover {
        background-color: ${color.backgroundLight};
      }
    `}
  &:focus {
    outline: none;
    ${props =>
      props.variant === 'normal' &&
      css`
        border: 1px solid ${color.borderInputFocus};
        box-shadow: 0 0 0 1px ${color.borderInputFocus};
        background-color: #fff;
      `}
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

export const ValueContainer = styled.div``;
