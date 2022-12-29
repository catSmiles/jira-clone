import { sizes, color, zIndexValues, mixin } from 'shared/utils/styles';
import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  z-index: ${zIndexValues.navLeft - 1};
  top: 0;
  left: ${sizes.appNavBarLeftWidth}px;
  height: 100vh;
  padding: 0 16px 24px;
  width: ${sizes.secondarySideBarWidth}px;
  border-right: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLightest};
  ${mixin.scrollableY}
  ${mixin.customScrollbar()};

  @media (max-width: 1100px) {
    width: ${sizes.secondarySideBarWidth - 10}px;
  }

  @media (max-width: 999px) {
    display: none;
  }
`;
