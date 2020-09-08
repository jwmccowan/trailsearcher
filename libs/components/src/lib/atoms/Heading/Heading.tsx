import styled from 'styled-components';
import { Colors } from '../../theme/types';

export type HeaderProps = {
  color?: keyof Colors;
};

export const H1 = styled.h1<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};
  margin: ${({ theme }) => theme.spacing.LG} ${({ theme }) => theme.spacing.NONE};
  margin-bottom: ${({ theme }) => theme.spacing.MD};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 6rem;
  line-height: 7rem;
  letter-spacing: -1.5px;
  opacity: 0.8;
`;

export const H2 = styled.h2<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};
  margin: ${({ theme }) => theme.spacing.MD} ${({ theme }) => theme.spacing.NONE};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 4.5rem;
  letter-spacing: -0.5px;
  opacity: 0.8;
`;

export const H3 = styled.h3<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};
  margin: ${({ theme }) => theme.spacing.SM} ${({ theme }) => theme.spacing.NONE};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3.5rem;
  opacity: 0.8;
`;

export const H4 = styled.h4<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};
  margin: ${({ theme }) => theme.spacing.NONE};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.125rem;
  line-height: 2.25rem;
  opacity: 0.8;
`;

export const H5 = styled.h5<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};
  margin: ${({ theme }) => theme.spacing.NONE};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.5rem;
  opacity: 0.8;
`;

export const Words = styled.span<HeaderProps>`
  color: ${({ color = 'onSurface', theme }) => theme.colors[color]};

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;
