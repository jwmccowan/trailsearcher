import * as React from 'react';
import styled from 'styled-components';
import { BuilderMenuList, BuilderMenuListMenuGroup, BuilderMenuListItem } from '@trailsearcher/components';
import { ExitToStartPage } from './ExitToStartPage';

const BuilderMenuBackground = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  position: fixed;
  cursor: pointer;
  width: 40%;
  background-color: black;
  opacity: .5;
`;

const StyledBuilderMenuBody = styled.div.attrs({
  onClick: event => event.preventDefault(),
})`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: white;
  width: 60%;
`;

export const BuilderMenu: React.FC<{open: boolean; requestToggle: () => void }> = ({ open, requestToggle }) => {
  return open && (
    <>
      <BuilderMenuBackground onClick={requestToggle} />
      <StyledBuilderMenuBody>
        <BuilderMenuList>
          <ExitToStartPage />
          <BuilderMenuListMenuGroup>
            <BuilderMenuListItem>
              Export PDF
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Share Build Link
            </BuilderMenuListItem>
          </BuilderMenuListMenuGroup>
          <BuilderMenuListMenuGroup>
            <BuilderMenuListItem>
              Options
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Save
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Save Copy
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Open Character
            </BuilderMenuListItem>
          </BuilderMenuListMenuGroup>
          <BuilderMenuListMenuGroup>
            <BuilderMenuListItem>
              Custom Feat Choices
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Custom Skill Increases
            </BuilderMenuListItem>
          </BuilderMenuListMenuGroup>
          <BuilderMenuListMenuGroup>
            <BuilderMenuListItem>
              Report Bug
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              Licenses
            </BuilderMenuListItem>
            <BuilderMenuListItem>
              About Creator
            </BuilderMenuListItem>
          </BuilderMenuListMenuGroup>
        </BuilderMenuList>
      </StyledBuilderMenuBody>
    </>
  );
};