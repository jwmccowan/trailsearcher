import * as React from 'react';
import styled from 'styled-components';
import { LinkButton, Grid, Row, Col } from '@trailsearcher/components';

const StyledHome = styled.div`
  background-color: dark-grey;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.SM};
  background-color: #6D1A36;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-size: 3.5rem;
  color: #FCD0A1;
  margin: 0px;
`;

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header>
        <HeaderText>Trail Searcher v0.1</HeaderText>
      </Header>
      <Grid>
        <Row collapse="sm">
          <Col spacing="MD">
            <LinkButton style={{ width: '100%' }} to="/old">
              Go to old app..
            </LinkButton>
          </Col>
          <Col spacing="MD">
            <LinkButton style={{ width: '100%' }} to="/build">
              Go to new app..
            </LinkButton>
          </Col>
        </Row>
      </Grid>
      
      
    </StyledHome>
  );
};