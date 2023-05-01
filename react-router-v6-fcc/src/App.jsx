import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import VansList from './pages/VansList';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansList />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
