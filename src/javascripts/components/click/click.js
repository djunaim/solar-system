import $ from 'jquery';
import planetCard from '../planet/planetCard';
import planetData from '../../helpers/data/planetData';
// import utilities from './utilities';


const showButton = () => {
  $('.card').find('.close').toggleClass('d-none');
};

const cardsClick = (e) => {
  const selectedId = $(e.target).closest('.card').attr('id');
  const allPlanets = planetData.getPlanet();
  for (let i = 0; i < allPlanets.length; i += 1) {
    const singlePlanet = allPlanets[i];
    if (selectedId === singlePlanet.name) {
      planetCard.planetCard([singlePlanet]);
      showButton();
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
