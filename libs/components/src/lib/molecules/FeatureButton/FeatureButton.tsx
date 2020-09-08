import * as React from 'react';
import { useToggle } from '../../hooks';
import { FeatureDialog } from '../FeatureDialog';
import { TitleButton } from '../TitleButton';
import { Feature } from '@trailsearcher/character-sheet';

type FeatureButtonProps<T> = {
  value: T;
  onSetValue: (name: T) => void;
  buttonTitle: string;
  values: Feature<T>[];
  dialogTitle: string;
};

export function FeatureButton<T>({ value, onSetValue, buttonTitle, values, dialogTitle }: FeatureButtonProps<T>) {
  const [modalOpen, dispatch] = useToggle();
  const toggle = React.useCallback(() => dispatch('toggle'), [dispatch]);

  return (
    <>
      <TitleButton onClick={toggle} value={values.find(({ key }) => key === value).displayName} title={buttonTitle} />
      <FeatureDialog
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
