import { Link, NavLink } from 'react-router-dom';

import avatarImg from '../assets/images/avatar-icon.png';

const Header = () => {
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
        <Link to="login" className="login-link">
          <img src={avatarImg} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
