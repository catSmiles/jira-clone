import { sizes, color, zIndexValues, mixin, font } from 'shared/utils/styles';
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

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  ${font.size(15)};
  color: ${color.textDark};
  ${font.medium};
`;

export const ProjectCategory = styled.div`
  ${font.size(13)};
  color: ${color.textMedium};
`;
