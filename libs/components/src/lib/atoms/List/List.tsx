import styled from 'styled-components';
import { getGreyscaleColor } from '../../theme';

export const BuilderMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const BuilderMenuListMenuGroup = styled.ul`
  border-bottom: 1px solid ${({ theme }) => getGreyscaleColor(theme)};
  padding: ${({ theme }) => theme.spacing.SM};
  margin: 0px;
  list-style-type: none;
`;

export const BuilderMenuListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.MD};
  user-select: none;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => getGreyscaleColor(theme)};
  }
`;