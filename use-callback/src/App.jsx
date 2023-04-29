import { useState, useCallback } from 'react';

import List from './List';
import { data } from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback((id) => {
    // --- to use below approach add people as dependency ---
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    setPeople((prevState) => {
      return prevState.filter((person) => person.id !== id)
    });
  }, []);

  return (
    <div className="container">
      <section>
        <button
          className="btn"
          style={{ marginBottom: '1rem' }}
          onClick={() => setCount(count + 1)}
        >
          count {count}
        </button>
        <List people={people} removePerson={removePerson} />
      </section>
    </div>
  );
};

export default App;
