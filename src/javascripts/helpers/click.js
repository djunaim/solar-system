import $ from 'jquery';
import planetCard from '../components/planet/planetCard';

const cardClick = () => {
  planetCard.planetCard();
  const cardGroup = $('.card');
  for (let i = 0; i < cardGroup.length; i += 1) {
    const singleCard = cardGroup[i];
    console.log(singleCard);
    const planetID = singleCard.children[0].innerHTML;
    console.log(planetID);
    const cardName = cardGroup.find('#planetName').html();
    console.log(cardName);
    if (singleCard.style.visibility === 'visible' && cardName === planetID) {
      singleCard.show();
    } else if (singleCard.style.visibility === 'visible' && cardName !== planetID) {
      singleCard.hide();
    }
  }
};

const attachEvent = () => {
  $(document).on('click', '.card', cardClick);
};

export default { attachEvent };
