import { Template } from './styles';

const Footer = () => {
  return (
    <Template>
      <div>
        <div>
          <span>Разработчик:</span>
          <span>Федосеев Д.С.</span>
        </div>
        <div>
          <span>GitHub:</span>
          <a
            href='https://github.com/FedoseevDS/tongueTwisters'
            rel='noreferrer nofollow noopener'
            target='_blank'
          >
            https://github.com/FedoseevDS/tongueTwisters
          </a>
        </div>
      </div>
    </Template>
  );
};

export default Footer;
