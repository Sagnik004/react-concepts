import { memo } from 'react';

import Person from './Person';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} removePerson={removePerson} {...person} />
        );
      })}
    </div>
  );
};

export default memo(List);
