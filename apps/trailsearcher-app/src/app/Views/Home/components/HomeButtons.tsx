import * as React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { LinkButton } from '@trailsearcher/components';
import { Container } from '@material-ui/core';

const ButtonContainer = styled(Grid).attrs({
  container: true,
  spacing: 3,
})`
  margin-top: 8px;
`;

const HomeButton = styled(LinkButton).attrs({
  color: 'primary',
  variant: 'contained',
})`
  width: 100%;
`;

export const HomeButtons: React.FC = () => (
  <Container>
    <ButtonContainer>
      <Grid item xs={12} sm={6}>
        <HomeButton to="/old">Go to old app..</HomeButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <HomeButton to="/build">Go to new app..</HomeButton>
      </Grid>
    </ButtonContainer>
  </Container>
);
