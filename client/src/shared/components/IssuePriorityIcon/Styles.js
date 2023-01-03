import styled from 'styled-components';

import Icon from 'shared/components/Icon';
import { issuePriorityColors } from 'shared/utils/styles';

export const PriorityIcon = styled(Icon)`
  color: ${props => issuePriorityColors[props.color]};
`;
