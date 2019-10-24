import $ from 'jquery';
import planetCard from '../components/planet/planetCard';
import planetData from './data/planetData';
import utilities from './utilities';

const cardsClick = () => {
  const allPlanets = planetData.getPlanet();
  for (let i = 0; i < allPlanets.length; i += 1) {
    const singlePlanet = allPlanets[i];
    const planetID = $('.card');
    if ($(planetID).find('h4').html() === singlePlanet.name) {
      console.log($(planetID).find('h4').html());
      utilities.printToDOM('planetarium', '');
      planetCard.planetCard(singlePlanet);
      // } else if (planetID !== singlePlanet.name) {
      //   singleCard.hide();
      // }
    }
  }
};

const attachEvent = () => {
  const allCards = $('.card');
  for (let j = 0; j < allCards.length; j += 1) {
    const singleCard = allCards[j];
    console.log(singleCard);
    $(singleCard).click(cardsClick);
  }
};

export default { attachEvent };
