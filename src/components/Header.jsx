import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function header() {
  return (
    <div>
      <div>
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{
            display: 'inline-block',
          }}
        />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <nav>
        <NavLink
          to="/rockets"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
        >
          Missions
        </NavLink>
        <NavLink
          to="/profile"
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default header;
