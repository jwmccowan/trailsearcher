import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, List, DialogActions, ListItem } from '@material-ui/core';
import { Button } from '../../atoms/Button';

export type Selectable<T> = { name: string; val: T };

export type ChoiceDialogProps<T> = {
  initialValue?: T;
  open: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (value: T) => void;
  values: Selectable<T>[];
};

export function ChoiceDialog<T>({ initialValue, open, onClose, title, values, onSubmit }: ChoiceDialogProps<T>) {
  const [value, setValue] = React.useState<T>(initialValue);
  const submit = React.useCallback(() => {
    onSubmit(value);
    onClose();
  }, [onClose, onSubmit, value]);

  return (
    <Dialog open={open} onEnter={() => setValue(initialValue)} fullWidth onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <List>
          {values.map(v => (
            <ListItem selected={v.val === value} onClick={() => setValue(v.val)}>
              {v.name}
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
