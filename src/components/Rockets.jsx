import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length > 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div>
      <p>rocket</p>
    </div>
  );
};

export default Rockets;
