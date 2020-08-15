import * as React from 'react';
import styled from 'styled-components';
import { useToggle } from '@trailsearcher/components';
import { BuilderMenu, BuilderNav } from './components';

const StyledBuilder = styled.div`
  background-color: darkgrey;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Builder: React.FC = () => {
  const [menuOpen, dispatch] = useToggle();
  return (
    <StyledBuilder>
      <BuilderNav onMenuToggle={() => dispatch('toggleOn')} />
      <BuilderMenu open={menuOpen} requestToggle={() => dispatch('toggle')} />
    </StyledBuilder>
  )
}