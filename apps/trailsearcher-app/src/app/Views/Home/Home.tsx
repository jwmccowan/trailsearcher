import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@trailsearcher/components';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  background-color: dark-grey;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #6D1A36;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-size: 3.5rem;
  color: #FCD0A1;
`;

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header>
        <HeaderText>Trail Searcher v0.1</HeaderText>
      </Header>
      <Link to="/old">
        <Button>Go to old app..</Button>
      </Link>
    </StyledHome>
  );
};