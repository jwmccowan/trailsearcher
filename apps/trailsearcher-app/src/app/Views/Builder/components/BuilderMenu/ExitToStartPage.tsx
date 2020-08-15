import * as React from 'react';
import { BuilderMenuListItem, BuilderMenuListMenuGroup } from '@trailsearcher/components';
import { useHistory } from 'react-router-dom';

export const ExitToStartPage: React.FC = () => {
  const { push } = useHistory();
  return (
    <BuilderMenuListMenuGroup>
      <BuilderMenuListItem onClick={() => push('/')}>
        Exit to Start Page
      </BuilderMenuListItem>
    </BuilderMenuListMenuGroup>
  );
};
