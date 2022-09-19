import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section">
      <h2 className="section-heading">About Page</h2>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
};

export default About;
