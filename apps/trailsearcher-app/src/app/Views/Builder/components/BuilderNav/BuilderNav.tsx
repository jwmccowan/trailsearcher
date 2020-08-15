import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@trailsearcher/components';

const StyledBuilderNav = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
padding: ${({ theme }) => theme.spacing.MD};
background-color: black;
`;

const StyledBuilderNavMenuButton = styled(Button)`
padding: ${({ theme }) => theme.spacing.SM} ${({ theme }) => theme.spacing.MD};
`;

export const BuilderNav: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => {
return (
  <StyledBuilderNav>
    <StyledBuilderNavMenuButton onClick={onMenuToggle}>|||</StyledBuilderNavMenuButton>
  </StyledBuilderNav>
)
}