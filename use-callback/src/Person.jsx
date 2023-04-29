const Person = ({ id, name, removePerson }) => {
  return (
    <div style={{ marginBottom: '8px' }}>
      <h4 style={{ marginBottom: '3px' }}>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove {name}</button>
    </div>
  );
};

export default Person;
