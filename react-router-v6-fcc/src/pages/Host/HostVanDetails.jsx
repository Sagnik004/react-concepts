import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentVanDetails = async () => {
      try {
        const res = await fetch(`/api/host/vans/${id}`);
        const data = await res.json();
        if (data && data.vans) {
          setCurrentVan(data.vans);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getCurrentVanDetails();
  }, [id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
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
    </section>
  );
};

export default HostVanDetails;
