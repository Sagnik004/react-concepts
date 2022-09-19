import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
