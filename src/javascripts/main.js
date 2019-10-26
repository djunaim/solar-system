import '../styles/main.scss';
import 'bootstrap';
import planetCard from './components/planet/planetCard';
import click from './components/click/click';
import planetData from './helpers/data/planetData';
import search from './helpers/search';

const init = () => {
  const planets = planetData.getPlanet();
  planetCard.planetCard(planets);
  planetCard.hideInfo();
  planetCard.hoverEvent();
  click.attachEvent();
  search.results();
};

init();

// const chatBuilder = () => {
//   const messages = chatData.getChats();
//   for (let i = 0; i < messages.length; i += 1) {
//     let chatString = `
//     <div>
//     </div>
//     `
//   }
// };
