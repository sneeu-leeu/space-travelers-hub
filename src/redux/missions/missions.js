const baseAPI = 'https://api.spacexdata.com/v3/';
const initialState = [];

const ADD_MISSION = 'missions/ADD_MISSION';
const JOIN_OR_LEAVE_MISSION = 'missions/JOIN_OR_LEAVE_MISSION';

export const toggleMissionState = (mission) => ({
  type: JOIN_OR_LEAVE_MISSION,
  payload: mission,
});

export const fetchMissions = async (dispatch) => {
  const fetched = await fetch(`${baseAPI}missions`);
  const list = await fetched.json();
  const missions = [];
  list.map((mission) => missions.push({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));

  dispatch({
    type: ADD_MISSION,
    payload: missions,
  });
};

const reducer = (state = initialState, action) => {
  let newState;
  let theMission;
  switch (action.type) {
    case ADD_MISSION:
      return [...action.payload];
    case JOIN_OR_LEAVE_MISSION:
      theMission = state.find((mission) => mission.mission_id === action.payload.mission_id);
      if (theMission && theMission.reserved) {
        newState = state.map((mission) => {
          if (mission.mission_id !== action.payload.mission_id) return mission;
          return { ...mission, reserved: false };
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

export const missions = (state) => state.missionsReducer;
export default reducer;
