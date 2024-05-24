import { Footer } from 'antd/es/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'components/header';

import Main from 'pages/main';

import GlobalStyles, { Template } from 'styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Template>
        <Header />
        <div>Хлебные крошки</div>
        <Routes>
          <Route element={<Main />} path='/tonguet-twisters' />
        </Routes>
        <Footer>
          <div>
            <span>Разработчик:</span>
            <span>Федосеев Д.С.</span>
          </div>
          <div>
            <span>GitHub:</span>
            <span>https://github.com/FedoseevDS/tongueTwisters</span>
          </div>
        </Footer>
      </Template>
    </BrowserRouter>
  );
};

export default App;
