import { Footer } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const Template = styled(Footer)`
  border-top: 1px solid green;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  overflow: hidden;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    overflow: hidden;

    & div {
      display: flex;
      gap: 10px;
      width: 360px;
    }
  }
`;
