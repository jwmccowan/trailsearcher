import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import { Button } from '../../atoms/Button';

export type InputDialogProps = {
  open: boolean;
  onClose: () => void;
  initialValue?: string;
  onSubmit: (value: string) => void;
  title?: string;
};

export const InputDialog: React.FC<InputDialogProps> = ({ initialValue = '', onSubmit, onClose, open, title }) => {
  const [value, setValue] = React.useState(initialValue);
  const submit = React.useCallback(() => {
    onSubmit(value);
    onClose();
  }, [onClose, onSubmit, value]);

  return (
    <Dialog onEnter={() => setValue(initialValue)} fullWidth open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          onChange={(ev) => setValue(ev.target.value)}
          value={value}
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
        />
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
};
