import styled from 'styled-components';
import { sizes, color, zIndexValues, mixin, font } from 'shared/utils/styles';
import Logo from 'shared/components/Logo';

/**
 *  structure NavbarLeft
 *  aside > a.logo + div.search-issue + div.create-issue + div.aboout
 */

// NavLeft (parent)
export const NavLeft = styled.aside`
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndexValues.navLeft};
  height: 100vh;
  width: ${sizes.appNavBarLeftWidth}px;
  background-color: ${color.backgroundDarkPrimary};
  transition: all 0.1s;
  &:hover {
    width: 200px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

// LogoLink
export const LogoLink = styled.a`
  display: block;
  position: relative;
  left: 0;
  margin: 20px 0 10px;
`;

export const StyleLogo = styled(Logo)`
  display: inline-block;
  margin-left: 8px;
  padding: 10px;
  ${mixin.clickable}
`;

// Item
export const Item = styled.div`
  position: relative;
  width: 100%;
  line-height: 42px;
  height: 42px;
  padding-left: 64px;
  color: rgb(222, 235, 255);
  transition: color 0.1s ease 0s;
  ${mixin.clickable}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;

// Item text
export const ItemText = styled.div`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  white-space: nowrap;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(12)}

  ${NavLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;

// Bottom
export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;
