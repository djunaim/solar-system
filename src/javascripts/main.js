import '../styles/main.scss';
import 'bootstrap';
import planetCard from './components/planet/planetCard';
import click from './helpers/click';

const init = () => {
  planetCard.planetCard();
  planetCard.hideInfo();
  planetCard.hoverEvent();
  click.singleCardClick();
};

init();
