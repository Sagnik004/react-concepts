import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
