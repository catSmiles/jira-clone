import styled from 'styled-components';

import Icon from 'shared/components/Icon';
import { issueTypeColors } from 'shared/utils/styles';

export const TypeIcon = styled(Icon)`
  color: ${props => issueTypeColors[props.color]};
`;
