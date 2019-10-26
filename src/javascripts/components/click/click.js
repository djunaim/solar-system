import $ from 'jquery';
import planetCard from '../planet/planetCard';
import planetData from '../../helpers/data/planetData';
import './click.scss';

const buttonClick = () => {
  const planets = planetData.getPlanet();
  $(document).click((e) => {
    const buttonID = e.target.id;
    if (buttonID === 'closeButton') {
      planetCard.planetCard(planets);
      planetCard.hideInfo();
      planetCard.hoverEvent();
    }
  });
};

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
      buttonClick();
    }
  }
};

const attachEvent = () => {
  const allCards = $('.card');
  for (let j = 0; j < allCards.length; j += 1) {
    const singleCard = allCards[j];
    $(singleCard).click(cardsClick);
  }
};

export default { attachEvent };
