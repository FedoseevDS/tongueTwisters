import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BreadCrumb from 'components/breadCrumb';
import Footer from 'components/footer';
import Header from 'components/header';

import Main from 'pages/main';

import GlobalStyles, { Body, Template } from 'styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Template>
        <Header />
        <BreadCrumb />
        <Body>
          <Routes>
            <Route element={<Main />} path='/tonguet-twisters' />
          </Routes>
        </Body>
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default App;
