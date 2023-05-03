import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const VanDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getVanDetails = async () => {
      try {
        const res = await fetch(`/api/vans/${id}`);
        const data = await res.json();
        setVan(data.vans);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };
    getVanDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="van-detail">
        <h2>Loading van details...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <h2>
        Something went wrong!
        <Link to="/">Go Home</Link>
      </h2>
    );
  }

  const prevPageSearchFilters = location.state?.searchFilter || '';
  const backLinkText = location.state?.vanTypeFiltered?.trim() || 'all';

  return (
    <div className="van-detail-container">
      <Link
        to={`..${prevPageSearchFilters}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {backLinkText} vans</span>
      </Link>
      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetail;
