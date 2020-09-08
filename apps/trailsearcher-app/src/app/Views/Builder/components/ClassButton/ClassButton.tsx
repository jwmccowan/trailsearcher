import * as React from 'react';
import styled from 'styled-components';
import { Button, useToggle, ClassSelectDialog } from '@trailsearcher/components';
import { Typography } from '@material-ui/core';
import { PCClass, getPCClass } from '@trailsearcher/character-sheet';

const StyledClassButton = styled(Button).attrs({
  variant: 'outlined',
})`
  width: 100%;
  padding: 16px;
`;

const AlignLeft = styled.div`
  text-align: left;
  width: 100%;
`;

type ClassButtonProps = {
  clss: PCClass;
  onSetClass: (name: PCClass) => void;
};

export const ClassButton: React.FC<ClassButtonProps> = ({ clss, onSetClass }) => {
  const [modalOpen, dispatch] = useToggle();
  const toggle = React.useCallback(() => dispatch('toggle'), [dispatch]);

  return (
    <>
      <StyledClassButton onClick={toggle}>
        <AlignLeft>
          <Typography color="textSecondary">Class:</Typography>
          <Typography component="h6" variant="h6">
            {getPCClass(clss).name}
          </Typography>
        </AlignLeft>
      </StyledClassButton>
      <ClassSelectDialog
        initialValue={clss}
        open={modalOpen}
        onClose={toggle}
        onSubmit={onSetClass}
        title="Which Class Will you be?"
      />
    </>
  );
};
