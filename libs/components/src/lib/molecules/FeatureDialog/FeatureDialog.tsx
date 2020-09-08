import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, List, DialogActions, ListItem } from '@material-ui/core';
import { Button } from '../../atoms/Button';
import { Feature } from '@trailsearcher/character-sheet';

export type FeatureDialogProps<T> = {
  initialValue?: T;
  open: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (value: T) => void;
  values: Feature<T>[];
};

export function FeatureDialog<T>({ initialValue, open, onClose, title, values, onSubmit }: FeatureDialogProps<T>) {
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
            <ListItem selected={v.key === value} onClick={() => setValue(v.key)}>
              {v.displayName}
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
