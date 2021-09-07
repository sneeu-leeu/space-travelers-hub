import { PropTypes } from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket }) => (
  <li key={rocket.id} className="list-unstyled">
    <div className="d-flex p-3 align-items-center">
      <div>
        <img
          src={rocket.flickr_images[0]}
          className="rocket-image"
          alt={rocket.rocket_name}
        />
      </div>
      <div className="rocket-description">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button" className="btn btn-primary">Reservation Rocket</button>
      </div>
    </div>
  </li>
);

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf().isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
