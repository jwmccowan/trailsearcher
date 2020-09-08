import * as React from 'react';
import styled from 'styled-components';
import { Button, useToggle, InputDialog } from '@trailsearcher/components';
import { Typography } from '@material-ui/core';

const StyledNameButton = styled(Button).attrs({
  variant: 'outlined',
})`
  width: 100%;
  padding: 16px;
`;

const AlignLeft = styled.div`
  text-align: left;
  width: 100%;
`;

type NameButtonProps = {
  name: string;
  onSetName: (name: string) => void;
};

export const NameButton: React.FC<NameButtonProps> = ({ name, onSetName }) => {
  const [modalOpen, dispatch] = useToggle();
  const toggle = React.useCallback(() => dispatch('toggle'), [dispatch]);

  return (
    <>
      <StyledNameButton onClick={toggle}>
        <AlignLeft>
          <Typography color="textSecondary">Character Name:</Typography>
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
        </AlignLeft>
      </StyledNameButton>
      <InputDialog
        initialValue={name}
        open={modalOpen}
        onClose={toggle}
        onSubmit={onSetName}
        title="Set Character Name"
      />
    </>
  );
};
