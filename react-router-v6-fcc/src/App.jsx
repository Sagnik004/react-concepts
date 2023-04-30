import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import VansList from './pages/VansList';
import VanDetail from './pages/VanDetail';

const App = () => {
  return (
    <>
    <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<VansList />} />
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
    </>
  );
};

export default App;
