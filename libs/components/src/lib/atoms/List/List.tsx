import styled from 'styled-components';

export const BuilderMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const BuilderMenuListMenuGroup = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.colors.onSurface};
  padding: ${({ theme }) => theme.spacing.SM};
  margin: 0px;
  list-style-type: none;
`;

export const BuilderMenuListItem = styled.li`
  padding: ${({ theme }) => theme.spacing.MD};
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.onSurface};
  opacity: 0.8;
  &:active {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;
