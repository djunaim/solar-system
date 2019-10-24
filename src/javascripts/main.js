import '../styles/main.scss';
import 'bootstrap';
import planetCard from './components/planet/planetCard';
import click from './helpers/click';
import planetData from './helpers/data/planetData';

const init = () => {
  const planets = planetData.getPlanet();
  planetCard.planetCard(planets);
  planetCard.hideInfo();
  planetCard.hoverEvent();
  click.attachEvent();
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
