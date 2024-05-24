import { Link } from 'react-router-dom';

import { Logo, Template, Title } from './styles';

const img = 'https://семья60.рф/wp-content/uploads/2020/07/speech-language-therapy.png';

const Header = () => {
  return (
    <Template>
      <Logo>
        <Link to='/tonguet-twisters'>
          <img alt='логотип' src={img} />
        </Link>
      </Logo>
      <Title>
        <h1>Скороговорки</h1>
      </Title>
    </Template>
  );
};

export default Header;
