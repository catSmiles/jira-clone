import styled from 'styled-components';

import { color, mixin, font } from 'shared/utils/styles';
import Input from 'shared/components/Input';
import Avatar from 'shared/components/Avatar';
import Button from 'shared/components/Button';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SearchInput = styled(Input)`
  width: 160px;
  margin-right: 18px;
`;
export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 12px 0 2px;
`;

export const AvatarIsActiveBorder = styled.div`
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  ${props => props.isActive && `box-shadow: 0 0 0 4px ${color.primary}`};
  ${mixin.clickable};
  transition: transform 0.1s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;
export const StyledButton = styled(Button)`
  margin-left: 6px;
`;

export const ClearAll = styled.div`
  border-left: 1px solid ${color.borderLightest};
  height: 32px;
  line-height: 32px;
  padding-left: 12px;
  margin-left: 15px;
  color: ${color.textDark};
  ${font.size(14.5)};
  ${mixin.clickable};
  &:hover {
    color: ${color.textMedium};
  }
`;
