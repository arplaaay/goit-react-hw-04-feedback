import styled from 'styled-components';

export const StatisticsList = styled.ul`
  text-align: center;
  list-style: none;

  padding: 0;
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
