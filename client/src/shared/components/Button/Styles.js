import { mixin, font, color } from 'shared/utils/styles';
import styled, { css } from 'styled-components';

import Spinner from 'shared/components/Spinner';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  vertical-align: middle;
  line-height: 1;
  padding: 0 ${props => (props.iconOnly ? 9 : 12)}px;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  appearance: none;
  ${mixin.clickable};
  ${font.size(14.5)};
  ${props => buttonVariants[props.variant]};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const colored = css`
  color: #fff;
  background: ${props => color[props.variant]};
  ${font.medium}
  &:not(:disabled) {
    &:hover {
      background: ${props => mixin.lighten(color[props.variant], 0.15)};
    }
    &:active {
      background: ${props => mixin.darken(color[props.variant], 0.1)};
    }
  }
`;

const secondaryAndEmptyShared = css`
  color: ${color.textDark};
  ${font.regular}
  &:not(:disabled) {
    &:hover {
      background: ${color.backgroundLight};
    }
    &:active {
      color: ${color.primary};
      background: ${color.backgroundLightPrimary};
    }
  }
`;

const buttonVariants = {
  primary: colored,
  secondary: css`
    background: ${color.secondary};
    ${secondaryAndEmptyShared};
  `,
  empty: css`
    background: #fff;
    ${secondaryAndEmptyShared};
  `,
};

export const Text = styled.div`
  padding-left: ${props => (props.withPadding ? 7 : 0)}px;
`;

export const StyledSpinner = styled(Spinner)`
  position: relative;
  top: 1px;
`;
