import styled from 'styled-components';
import { Colors } from '../../theme/types';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  context?: keyof Pick<Colors, 'primary' | 'secondary'>;
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.MD} ${({ theme }) => theme.spacing.XL};
  background-color: ${({ context = 'primary', theme }) => theme.colors[context]};
  border-radius: 6px;
  border: 1px solid ${({ theme, context = 'primary' }) => theme.colors.onPrimary};
  color: ${({ theme, context = 'primary' }) => theme.colors.onPrimary};
  word-wrap: none;

  &:focus {
    outline: white auto 1px;
  }
`;
