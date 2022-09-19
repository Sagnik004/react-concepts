import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import products from '../data';

const Products = () => {
  return (
    <Fragment>
      <section className="section">
        <h2 className="section-heading">Products</h2>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>More Info</Link>
            </article>
          );
        })}
      </section>
    </Fragment>
  );
};

export default Products;
