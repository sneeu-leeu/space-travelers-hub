const baseAPI = 'https://api.spacexdata.com/v3/';
const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET_TICKET = 'space-travellers/rockets/RESERVE_ROCKET_TICKET';

const initialState = [];

export const fetchRockets = () => async (dispatch) => {
  const fetched = await fetch(`${baseAPI}rockets`);
  const list = await fetched.json();
  const rockets = [];
  list.map((rocket) => rockets.push({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));

  dispatch({
    type: FETCH_ROCKETS,
    payload: rockets,
  });
};

export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET_TICKET,
  payload: rocket,
});

const reducer = (state = initialState, action) => {
  let newState;
  let reservation;
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...action.payload];
    case RESERVE_ROCKET_TICKET:
      reservation = state.find(
        (rocket) => rocket.rocket_id === action.payload.rocket_id,
      );
      if (reservation && reservation.reserved) {
        newState = state.map((rocket) => {
          if (rocket.rocket_id !== action.payload.rocket_id) return rocket;
          return { ...rocket, reserved: false };
        });
        return newState;
      }
      newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.mission_id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

export const rockets = (state) => state.rockets;
export default reducer;
