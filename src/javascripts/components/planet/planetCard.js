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
        <div class="card">
          <div class="card-body">
            <h5 class="card-title d-flex align-content-center">${planet.name}</h5>
          </div>
        </div>
      </div>  
    `;
  }
  domString += '</div>';
  utilities.printToDOM('planetarium', domString);
};

export default { planetCard };
