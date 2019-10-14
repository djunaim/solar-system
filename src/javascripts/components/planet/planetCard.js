import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planetData from '../../helpers/data/planetData';
import './planetCard.scss';

const planetCard = () => {
  let domString = '<div class="row">';
  const planets = planetData.getPlanet();
  for (let i = 0; i < planets.length; i += 1) {
    const planet = planets[i];
    domString += `
      <div class="col-4">
        <div class="card" id=${planet.name}>
            <div class="card-body">
              <h4 class="planetName">${planet.name}</h4>
              <img src="${planet.imageUrl}" class="card-img-top d-none">
              <p class="card-text">${planet.description}</p>
              <p class="card-text">${planet.isGasPlanet}</p>
              <p class="card-text">${planet.numberOfMoons}</p>
              <p class="card-text">${planet.nameOfLargestMoon}</p>
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
  $('.card-body').hover(hoverName);
};

const hoverImg = (e) => {
  $(e.target).find('img').toggleClass('d-none');
};

const showImg = () => {
  $('.card-body').hover(hoverImg);
};

const hoverEvent = () => {
  hideName();
  showImg();
};

export default { planetCard, hideInfo, hoverEvent };
