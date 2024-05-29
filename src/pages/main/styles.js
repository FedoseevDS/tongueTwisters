import styled from 'styled-components';

import { baseTheme } from 'styles/colors';

export const Button = styled.div`
  display: flex;
  gap: 30px;

  & input {
    border-radius: 10px;
    border: 1px solid green;
    padding: 5px 10px;
    outline: none;
  }

  & button {
    width: 130px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: ${baseTheme.colors.common};

    &:hover {
      background: #b8d1b8;
    }
  }
`;

export const Table = styled.div`
  border: 1px solid;
  margin-top: 20px;
  overflow: hidden;

  & > table {
    width: -webkit-fill-available;

    & td {
      border: 1px solid;
      padding: 5px;

      &:nth-child(1) {
        text-align: center;
        width: 40px;
      }

      &:nth-child(2) {
        width: 40px;
      }
    }
  }
`;

export const TableHead = styled.thead`
  text-align: center;
  font-weight: 700;

  & > tr {
    background: ${baseTheme.colors.common};
  }
`;

export const TableBody = styled.tbody`
  & td:nth-child(1) {
    background: ${baseTheme.colors.common};
  }
`;
