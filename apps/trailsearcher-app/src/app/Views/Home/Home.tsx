import * as React from 'react';
import styled from 'styled-components';
import { LinkButton, Grid, Row, Col, H3, Surface } from '@trailsearcher/components';

const StyledHome = styled(Surface)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Surface).attrs({
  elevation: 4,
})`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.SM};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Home: React.FC = () => {
  return (
    <StyledHome elevation={1}>
      <Header>
        <H3>Trail Searcher v0.1</H3>
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
