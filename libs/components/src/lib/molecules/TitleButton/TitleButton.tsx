import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Button } from '../../atoms/Button';

const StyledChoiceButton = styled(Button).attrs({
  variant: 'outlined',
})`
  width: 100%;
  padding: 16px;
`;

const AlignLeft = styled.div`
  text-align: left;
  width: 100%;
`;

export type TitleButtonProps = {
  title: string;
  value: string;
  onClick: () => void;
};

export const TitleButton: React.FC<TitleButtonProps> = props => (
  <StyledChoiceButton onClick={props.onClick}>
    <AlignLeft>
      <Typography color="textSecondary">{props.title}</Typography>
      <Typography component="h6" variant="h6">
        {props.value}
      </Typography>
    </AlignLeft>
  </StyledChoiceButton>
);
