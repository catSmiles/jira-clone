import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
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

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${props =>
    props.variant === 'normal' &&
    css`
      min-height: 32px;
      padding: 5px 5px 5px 10px;
    `}
`;

/** Dropdown */
export const Dropdown = styled.div`
  border: 1px solid #333;
  z-index: ${zIndexValues.dropdown};
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  ${mixin.boxShadowDropdown};
  ${props => (props.width ? `max-width: ${props.width}px;` : `width: 100%;`)};
`;

export const DropdownInput = styled.input`
  padding: 10px 14px 8px;
  width: 100%;
  border: none;
  background-color: none;
  color: ${color.textDarkest};
  &:focus {
    border: none;
  }
`;

export const Options = styled.div`
  max-height: 200px;
  ${mixin.scrollableY};
  ${mixin.customScrollbar()};
`;

export const Option = styled.div`
  padding: 8px 14px;
  word-break: break-word;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 8px;
  }
`;
