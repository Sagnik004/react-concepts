import React, { Fragment } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </Fragment>
  );
};

export default App;
