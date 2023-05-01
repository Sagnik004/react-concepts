import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" end>Dashboard</NavLink>
        <NavLink to="/host/income">Income</NavLink>
        <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
