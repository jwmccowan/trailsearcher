import * as React from 'react';
import { useToggle } from '../../hooks';
import { TitleButton } from '../TitleButton';
import { InputDialog } from '../InputDialog';

type InputButtonProps = {
  initialValue: string;
  onSetValue: (name: string) => void;
  buttonTitle: string;
  dialogTitle: string;
};

export function InputButton<T>({ initialValue, onSetValue, buttonTitle, dialogTitle }: InputButtonProps) {
  const [modalOpen, dispatch] = useToggle();
  const toggle = React.useCallback(() => dispatch('toggle'), [dispatch]);

  return (
    <>
      <TitleButton onClick={toggle} value={initialValue} title={buttonTitle} />
      <InputDialog
        initialValue={initialValue}
        open={modalOpen}
        onClose={toggle}
        onSubmit={onSetValue}
        title={dialogTitle}
      />
    </>
  );
}
