import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function header() {
  return (
    <div className="d-flex justify-content-between align-items-center m-4">
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{
            display: 'inline-block',
            width: '3rem',
          }}
        />
        <div className="m-3">
          <h2>Space Travelers&apos; Hub</h2>
        </div>
      </div>
      <nav>
        <NavLink to="/rockets" className="p-2">Rockets</NavLink>
        <NavLink to="/missions" className="p-2">Missions</NavLink>
        <NavLink to="/profile" className="p-2">My Profile</NavLink>
      </nav>
    </div>
  );
}

export default header;
