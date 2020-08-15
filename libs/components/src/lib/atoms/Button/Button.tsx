import styled from 'styled-components';
import { getGreyscaleColor, getContextColor, Shade } from '../../theme/themeUtils';
import { Context } from '../../theme/Theme/colors';

export type ButtonProps = {
  context?: keyof Context;
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  padding: ${({ theme }) => theme.spacing.SM} ${({ theme }) => theme.spacing.LG};
  background-color: ${({ theme }) => getGreyscaleColor(theme, Shade.lighter)};
  border-radius: 6px;
  border: 1px solid ${({ theme, context = 'primary' }) => getContextColor(theme, context)};

  &:focus {
    outline: white auto 1px;
  }
`;
