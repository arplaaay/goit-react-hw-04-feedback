import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;

  padding: 0;

  list-style: none;
`;

export const ListItems = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
