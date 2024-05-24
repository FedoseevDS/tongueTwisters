import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export const Template = styled(Layout)`
  display: flex;
  gap: 20px;
`;

export default createGlobalStyle`
  body {
    margin: 0;
  }
`;
