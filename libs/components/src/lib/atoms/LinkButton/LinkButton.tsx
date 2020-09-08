import { Button } from '../Button';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const LinkButton = styled(Button).attrs({
  component: Link,
})<LinkProps>``;

// export const LinkButton2: React.FC<ButtonProps & { to: string }> = ({ to, onClick, ...props }) => {
//   const { push } = useHistory();
//   const handleClick = React.useCallback(
//     (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//       push(to);
//       if (onClick) {
//         onClick(event);
//       }
//     },
//     [onClick, push, to]
//   );

//   return <Button {...props} onClick={handleClick} />;
// };
