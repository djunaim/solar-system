import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './planetCard.scss';

const planetCard = (arr) => {
  let domString = '<div class="row">';
  for (let i = 0; i < arr.length; i += 1) {
    const singleArr = arr[i];
    domString += `
      <div class="col">
        <div class="card" id=${singleArr.name}>
            <div class="card-body">
              <h4 class="planetName">${singleArr.name} <span class="close d-none"><button class="closeButton">x</button><span> </h4>
              <img src="${singleArr.imageUrl}" class="card-img-top d-none">
              <p class="card-text">${singleArr.description}</p>
            </div>
        </div> 
      </div>   
    `;
  }
  domString += '</div>';
  utilities.printToDOM('planetarium', domString);
};

const hideInfo = () => {
  $('.card-text').hide();
};

const hoverName = (e) => {
  $(e.target).find('.planetName').toggleClass('d-none');
};

const hideName = () => {
  $('.card').hover(hoverName);
};

const hoverImg = (e) => {
  $(e.target).find('img').toggleClass('d-none');
};

const showImg = () => {
  $('.card').hover(hoverImg);
};

const hoverEvent = () => {
  hideName();
  showImg();
};

export default { planetCard, hideInfo, hoverEvent };
