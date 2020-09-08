import * as React from 'react';
import { useToggle } from '../../hooks';
import { ChoiceDialog } from '../ChoiceDialog';
import { TitleButton } from '../TitleButton';

type ChoiceButtonProps<T> = {
  value: T;
  onSetValue: (name: T) => void;
  buttonTitle: string;
  values: { name: string; val: T }[];
  dialogTitle: string;
};

export function ChoiceButton<T>({ value, onSetValue, buttonTitle, values, dialogTitle }: ChoiceButtonProps<T>) {
  const [modalOpen, dispatch] = useToggle();
  const toggle = React.useCallback(() => dispatch('toggle'), [dispatch]);

  return (
    <>
      <TitleButton onClick={toggle} value={values.find(({ val }) => val === value).name} title={buttonTitle} />
      <ChoiceDialog
        initialValue={value}
        open={modalOpen}
        onClose={toggle}
        onSubmit={onSetValue}
        title={dialogTitle}
        values={values}
      />
    </>
  );
}
