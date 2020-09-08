import * as React from 'react';
import styled from 'styled-components';
import { HomeButtons } from './components/HomeButtons';
import { AppHeader } from '@trailsearcher/components';

const StyledHome = styled.div``;

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <AppHeader title="Trail Searcher v0.1" />
      <HomeButtons />
    </StyledHome>
  );
};
