import styled, { css } from 'styled-components';
import { screenSize } from '../../media';
import { Spacing } from '../../theme/Theme/spacing';

export const Grid = styled.div``;

export const Row = styled.div<{ collapse?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  ${({ collapse }) =>
    collapse
      ? css`
          display: block;
          ${screenSize[collapse]} {
            display: flex;
          }
        `
      : css`
          display: flex;
        `}
`;

export type ColProps = {
  size?: number;
  spacing?: keyof Spacing;
};

export const Col = styled.div<ColProps>`
  flex: ${({ size }) => size ?? 1};
  padding: ${({ spacing, theme }) => theme.spacing[spacing ?? 'NONE']};
`;
