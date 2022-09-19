import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section">
      <h2 className="section-heading">Error - Page Not Found!</h2>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
};

export default Error;
