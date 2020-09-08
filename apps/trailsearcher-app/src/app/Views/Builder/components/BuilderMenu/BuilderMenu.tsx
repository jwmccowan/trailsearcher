import * as React from 'react';
import { List, ListItem, ListItemText, Divider, ListItemIcon, AppBar, Typography, Container } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ShareIcon from '@material-ui/icons/Share';
import InfoIcon from '@material-ui/icons/Info';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import BugReportIcon from '@material-ui/icons/BugReport';
import SubjectIcon from '@material-ui/icons/Subject';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const MenuHeaderText = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  padding: 60px 0px 8px 0px;
`;

const StyledList = styled(List).attrs({
  component: 'nav',
})`
  width: 300px;
`;

const BuilderMenuListItem: React.FC<{ onClick?: () => void; primary: string }> = ({ children, onClick, primary }) => (
  <ListItem button onClick={onClick}>
    <ListItemIcon>{children}</ListItemIcon>
    <ListItemText primary={primary} />
  </ListItem>
);

export const ExitToStartPage: React.FC = () => {
  const { push } = useHistory();
  return (
    <BuilderMenuListItem onClick={() => push('/')} primary="Exit to Start Page">
      <ExitToAppIcon />
    </BuilderMenuListItem>
  );
};

export const BuilderMenu: React.FC = () => (
  <>
    <AppBar elevation={0} position="sticky">
      <MenuHeaderText>
        <Container>Joojoo Toejam</Container>
      </MenuHeaderText>
    </AppBar>
    <StyledList>
      <ExitToStartPage />
      <Divider />
      <BuilderMenuListItem primary="Export PDF">
        <PictureAsPdfIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Share Build Link">
        <ShareIcon />
      </BuilderMenuListItem>
      <Divider />
      <BuilderMenuListItem primary="Options">
        <InfoIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Save">
        <SaveIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Save Copy">
        <SaveAltIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Open Character">
        <FolderOpenIcon />
      </BuilderMenuListItem>
      <Divider />
      <BuilderMenuListItem primary="Custom Feat Choices">
        <ExposurePlus1Icon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Custom Skill Increases">
        <ExposurePlus1Icon />
      </BuilderMenuListItem>
      <Divider />
      <BuilderMenuListItem primary="Report Bug">
        <BugReportIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="Licenses">
        <SubjectIcon />
      </BuilderMenuListItem>
      <BuilderMenuListItem primary="About Creator">
        <InfoIcon />
      </BuilderMenuListItem>
    </StyledList>
  </>
);
