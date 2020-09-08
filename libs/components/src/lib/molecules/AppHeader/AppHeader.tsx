import * as React from 'react';
import styled from 'styled-components';
import { IconButton, Typography, AppBar, Toolbar, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '../../atoms/Button';
import { useToggle } from '../../hooks';

const StyledAppBar = styled(AppBar)`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const MenuTitle = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  flex-grow: 1;
`;

export type AppHeaderProps = {
  title: string;
};

export const AppHeader: React.FC<AppHeaderProps> = ({ title, children }) => {
  const [open, dispatch] = useToggle();
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuButton onClick={() => dispatch(children ? 'toggleOn' : 'toggleOff')}>
            <MenuIcon />
          </MenuButton>
          <MenuTitle>{title}</MenuTitle>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
      <Drawer open={open} onClose={() => dispatch('toggleOff')} anchor="left">
        {children}
      </Drawer>
    </>
  );
};
