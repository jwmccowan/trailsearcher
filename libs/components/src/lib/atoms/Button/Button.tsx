import styled from 'styled-components';
import { getGreyscaleColor, getContextColor, Shade } from '../../theme/themeUtils';
import { Context } from '../../theme/Theme/colors';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  context?: keyof Context;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.MD} ${({ theme }) => theme.spacing.XL};
  background-color: ${({ theme }) => getGreyscaleColor(theme, Shade.lighter)};
  border-radius: 6px;
  border: 1px solid ${({ theme, context = 'primary' }) => getContextColor(theme, context)};
  word-wrap: none;

  &:focus {
    outline: white auto 1px;
  }
`;
