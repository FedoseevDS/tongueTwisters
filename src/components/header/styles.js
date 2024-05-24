import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

import { baseTheme } from 'styles/colors';

export const Template = styled(Header)`
  background: ${baseTheme.colors.background};
  display: flex;
  height: 100px;
`;

export const Logo = styled.div`
  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    & img {
      height: 90%;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & h1 {
    text-align: center;
    font-size: 40px;
    margin: 0;
    padding: 0;
  }
`;
