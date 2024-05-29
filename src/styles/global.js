import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Template = styled(Layout)`
  display: flex;
  gap: 10px;
`;

export const Body = styled.div`
  padding: 0 50px;
`;
