import $ from 'jquery';
import planetCard from '../components/planet/planetCard';
import planetData from './data/planetData';
import utilities from './utilities';

planetCard.planetCard();
const allPlanets = planetData.getPlanet();

const cardsClick = () => {
  const cardGroup = $('.card');
  for (let i = 0; i < cardGroup.length; i += 1) {
    const singleCard = cardGroup[i];
    //   const planetID = $('.card').find('.planetName').html();
    //   console.log(planetID);
    for (let j = 0; j < allPlanets.length; j += 1) {
      const singlePlanet = allPlanets[j];
      console.log(singlePlanet);
      // const cardName = cardGroup.find('.planetName').html();
      // console.log(cardName);
      if (singleCard === singlePlanet.name) {
        utilities.printToDOM('planetarium', singleCard);
      // } else if (planetID !== singlePlanet.name) {
      //   singleCard.hide();
      }
    }
  }
};

const singleCardClick = () => {
  $('.card').click((e) => {
    const cardID = e.target.id;
    cardsClick(cardID);
  });
};

// const attachEvent = () => {
//   $(document).on('click', '.card', cardsClick);
// };

export default { singleCardClick };
