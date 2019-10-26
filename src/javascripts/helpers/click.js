import $ from 'jquery';
import planetCard from '../components/planet/planetCard';
import planetData from './data/planetData';
// import utilities from './utilities';

const cardsClick = (e) => {
  const selectedId = $(e.target).closest('.card').attr('id');
  const allPlanets = planetData.getPlanet();
  for (let i = 0; i < allPlanets.length; i += 1) {
    const singlePlanet = allPlanets[i];
    // const planetID = $('.card-body');
    // if ($(planetID).closest('div.card').attr('id') === singlePlanet.name) {
    if (selectedId === singlePlanet.name) {
      console.log('In the if statement');
      // console.log($(planetID).closest('div.card').attr('id'));
      // utilities.printToDOM('planetarium', '');
      planetCard.planetCard([singlePlanet]);
      // utilities.printToDOM('singlePlanet', singlePlanet);
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
