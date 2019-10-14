import $ from 'jquery';
import planetCard from '../components/planet/planetCard';
import planetData from './data/planetData';
import utilities from './utilities';

const cardClick = () => {
  planetCard.planetCard();
  const allPlanets = planetData.getPlanet();
  const cardGroup = $('.card');
  for (let i = 0; i < cardGroup.length; i += 1) {
    const singleCard = cardGroup[i];
    const planetID = $('.card').find('.planetName').html();
    console.log(planetID);
    for (let j = 0; j < allPlanets.length; j += 1) {
      const singlePlanet = allPlanets[j];
      console.log(singlePlanet);
      const cardName = cardGroup.find('.planetName').html();
      console.log(cardName);
      if (planetID === singlePlanet.name) {
        utilities.printToDOM('planetarium', singleCard);
      // } else if (planetID !== singlePlanet.name) {
      //   singleCard.hide();
      }
    }
  }
};

const attachEvent = () => {
  $(document).on('click', '.card', cardClick);
};

export default { attachEvent };
