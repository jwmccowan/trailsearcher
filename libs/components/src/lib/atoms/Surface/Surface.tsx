import * as React from 'react';
import styled from 'styled-components';

export type OverlayProps = { elevation: 0 | 1 | 2 | 3 | 4 | 5 | 6 };

const Overlay = styled.div<OverlayProps>`
  background: rgba(255, 255, 255, ${({ elevation }) => 0.03 * elevation});
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Rectangle = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
`;

export const Surface: React.FC<React.HTMLAttributes<HTMLDivElement> & OverlayProps> = ({
  elevation,
  children,
  ...rest
}) => (
  <Rectangle {...rest}>
    <Overlay elevation={elevation} />
    {children}
  </Rectangle>
);
