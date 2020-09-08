import * as React from 'react';
import { ChoiceDialogProps, ChoiceDialog } from './ChoiceDialog';
import { PCClass, getPCClassList } from '@trailsearcher/character-sheet';

export type ClassSelectDialogProps = Pick<ChoiceDialogProps<PCClass>, 'initialValue' | 'onClose' | 'open' | 'onSubmit'>;

export const ClassSelectDialog: React.FC<ChoiceDialogProps<PCClass>> = ({ initialValue, ...props }) => (
  <ChoiceDialog
    {...props}
    initialValue={initialValue ?? PCClass.fighter}
    values={getPCClassList().map(pcc => ({ name: pcc.name, val: pcc.class }))}
  />
);
