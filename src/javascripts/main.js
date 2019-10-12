import '../styles/main.scss';
import 'bootstrap';
import planetCard from './components/planet/planetCard';

const init = () => {
  planetCard.planetCard();
  planetCard.hideInfo();
  planetCard.hoverEvent();
};

init();
