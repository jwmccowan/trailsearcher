import * as React from 'react';
import { ButtonProps, Button } from '../Button';
import { useHistory } from 'react-router-dom';

export const LinkButton: React.FC<ButtonProps & { to: string }> = ({ to, onClick, ...props }) => {
  const { push } = useHistory();
  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    push(to);
    if (onClick) {
      onClick(event);
    }
  }, [onClick, push, to]);

  return <Button {...props} onClick={handleClick} />;
}