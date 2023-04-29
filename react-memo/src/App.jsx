import { useState } from 'react';

import './App.css';
import Greeting from './Greeting';

const App = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>
      <div className="card">
        <label>
          Name{': '}
          <input
            style={{ marginLeft: '12px' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address{': '}
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </div>
      <Greeting name={name} />
    </>
  );
};

export default App;
