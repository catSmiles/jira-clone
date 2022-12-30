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

export const LinkItem = styled.a`
  position: relative;
  display: flex;
  padding: 8px 12px;
  ${mixin.clickable};
  border-radius: 3px;
  ${props =>
    !props.to ? `cursor: not-allowed;` : `&:hover {background-color: ${color.backgroundLight};}`}
  i {
    margin-right: 15px;
    ${font.size(20)}
  }
  &.active {
    color: ${color.primary};
    background-color: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.div`
  padding-top: 2px;
  ${font.size(14.7)};
`;

export const Devider = styled.div`
  margin-top: 17px;
  padding-top: 18px;
  border-top: 1px solid ${color.borderLight};
`;

export const NotImplemented = styled.div`
  position: absolute;
  left: 40px;
  top: 7px;
  width: 140px;
  padding: 5px 0 5px 8px;

  background-color: ${color.backgroundMedium};
  color: ${color.textDark};
  border-radius: 3px;
  opacity: 0;

  text-transform: uppercase;
  ${font.size(11.5)};
  ${font.bold};

  ${LinkItem}:hover & {
    opacity: 1;
  }
`;
