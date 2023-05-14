import { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';

import { getHostsAllVans } from '../../api';
import { requireAuth } from '../../utils/requireAuth';

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ data: getHostsAllVans() });
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  const renderHostVanElements = ({ vans }) => {
    if (vans.length < 1) {
      return (
        <section>
          <h1 className="host-vans-title">No vans found! Maybe add some?</h1>
        </section>
      );
    }

    const hostVansElements = vans.map((van) => (
      <Link to={`${van.id}`} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));

    return <section>{hostVansElements}</section>;
  };

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <Suspense fallback={<h2>Loading your vans...</h2>}>
          <Await resolve={dataPromise.data}>{renderHostVanElements}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default HostVans;
