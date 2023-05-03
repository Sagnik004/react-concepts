import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getAllVans } from '../../api';

const VansList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const data = await getAllVans();
        setVans(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVans();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong! Error: {error.message}</h1>;
  }

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter.toLowerCase())
    : vans;

  const vanElements = displayedVans.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        {/* Passing the state below will help to grab it in next page, 
            if we are to return back from next page to this one we can help
            to retain any filters set in this page */}
        <Link
          to={`${van.id}`}
          state={{
            searchFilter: `?${searchParams.toString()}`,
            vanTypeFiltered: typeFilter,
          }}
        >
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

  // If there were multiple search params, to retain the other ones we need to use
  // the below solution (Note: it will remove all search params with the key,
  // example: ?name=bob&type=rugged&type=simple and removing type will make it as
  // ?name=bob)
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // Use this function if we want to use Link and native URLSearchParams
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter?.toLowerCase() === 'simple' ? 'selected' : ''
          }`}
          onClick={() => setSearchParams({ type: 'simple' })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter?.toLowerCase() === 'luxury' ? 'selected' : ''
          }`}
          onClick={() => setSearchParams({ type: 'luxury' })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter?.toLowerCase() === 'rugged' ? 'selected' : ''
          }`}
          onClick={() => setSearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default VansList;
