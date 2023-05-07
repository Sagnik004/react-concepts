import { Link, useLocation, useLoaderData } from 'react-router-dom';

import { getVan } from '../../api';

export function loader({ params }) {
  return getVan(params.id);
}

const VanDetail = () => {
  const location = useLocation();
  const { van } = useLoaderData();

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
