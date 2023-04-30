import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VansList = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const res = await fetch('/api/vans');
        const data = await res.json();

        setVans(data.vans);
      } catch (error) {
        console.log(error);
        setVans([]);
      }
    };

    fetchVans();
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link to={`${van.id}`}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-details">
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default VansList;
