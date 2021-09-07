import { PropTypes } from 'prop-types';
import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Rocket.css';
import { reserveRocket } from '../redux/rockets/rockets';

const dispatch = useDispatch();
const makeReservation = (e) => {
  dispatch(reserveRocket({ rocket_id: e.target.id }));
};

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
        <span>
          {rocket.reserved ? (
            <Badge className="bg-info">reserved</Badge>
          ) : (
            null
          )}
        </span>
        <p>{rocket.description}</p>
        <button
          type="button"
          className="btn btn-primary"
          id={rocket.id}
          onClick={makeReservation}
        >
          Reservation Rocket
        </button>
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
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
