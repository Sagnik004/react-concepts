import { Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';

import { getHostsVan } from '../../api';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ data: getHostsVan(params.id) });
}

const HostVanDetails = () => {
  const dataPromise = useLoaderData();

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  const renderHostVanDetails = ({ van: currentVan }) => {
    return (
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            style={({ isActive }) => (isActive ? activeStyles : null)}
            end
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={currentVan} />
      </div>
    );
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <Suspense fallback={<h2>Loading your van details...</h2>}>
        <Await resolve={dataPromise.data}>{renderHostVanDetails}</Await>
      </Suspense>
    </section>
  );
};

export default HostVanDetails;
