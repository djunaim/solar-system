import $ from 'jquery';
import planetCard from '../components/planet/planetCard';

const cardClick = (e) => {
  planetCard.planetCard();
  const cardGroup = $('.card');
  for (let i = 0; i < cardGroup.length; i += 1) {
    const planetID = $(e.target).find('.card').html();
    const singleCard = cardGroup[i];
    if (singleCard.style.display === 'block' && singleCard.name === planetID) {
      singleCard.style.display = 'none';
    } else if (singleCard.style.display === 'none' && singleCard.name === planetID) {
      singleCard.style.display = 'block';
    }
  }
};

const attachEvent = () => {
  $(document).on('click', '.card', cardClick);
};

export default { attachEvent };
