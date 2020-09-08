import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, List, DialogActions, ListItem } from '@material-ui/core';
import { Button } from '../../atoms/Button';
import { PCClass, getPCClassList } from '@trailsearcher/character-sheet';

export type ClassSelectDialogProps = {
  open: boolean;
  onClose: () => void;
  initialValue?: PCClass;
  onSubmit: (value: PCClass) => void;
  title?: string;
};

export const ClassSelectDialog: React.FC<ClassSelectDialogProps> = ({
  initialValue = PCClass.fighter,
  onSubmit,
  onClose,
  open,
  title,
}) => {
  const [value, setValue] = React.useState(initialValue);
  const submit = React.useCallback(() => {
    onSubmit(value);
    onClose();
  }, [onClose, onSubmit, value]);

  return (
    <Dialog onEnter={() => setValue(initialValue)} fullWidth open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <List>
          {getPCClassList().map(pcc => (
            <ListItem selected={pcc.class === value} onClick={() => setValue(pcc.class)}>
              {pcc.name}
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
};
