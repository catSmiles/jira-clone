import React from 'react';

import Icon from 'shared/components/Icon';
import { NavLeft, LogoLink, StyleLogo, Item, ItemText, Bottom } from './Styles';

function NavbarLeft() {
  return (
    <NavLeft>
      <LogoLink>
        <StyleLogo />
      </LogoLink>

      <Item>
        <Icon type="search" size={22} top={1} left={3} />
        <ItemText>Search Issues</ItemText>
      </Item>

      <Item>
        <Icon type="plus" size={27} />
        <ItemText>Create Issue</ItemText>
      </Item>

      <Bottom>
        <Item>
          <Icon type="help" size={25} />
          <ItemText>About</ItemText>
        </Item>
      </Bottom>
    </NavLeft>
  );
}

export default NavbarLeft;

/**
 * structure NavbarLeft
 *  aside > a.logo + div.search-issue + div.create-issue + div.aboout
 */
