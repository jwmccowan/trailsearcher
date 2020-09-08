import * as React from 'react';
import { ChoiceDialogProps, ChoiceDialog } from './ChoiceDialog';
import { Ancestry, getAncestryList } from '@trailsearcher/character-sheet';

export type AncestryDialogProps = Pick<ChoiceDialogProps<Ancestry>, 'initialValue' | 'onClose' | 'open' | 'onSubmit'>;

export const AncestryDialog: React.FC<ChoiceDialogProps<Ancestry>> = ({ initialValue, ...props }) => (
  <ChoiceDialog
    {...props}
    initialValue={initialValue ?? Ancestry.human}
    values={getAncestryList().map(ancestry => ({ name: ancestry.name, val: ancestry.ancestry }))}
  />
);
