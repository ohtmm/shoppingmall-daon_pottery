import { Link } from 'react-router-dom';
import { ProductsCategory } from './Header/style';

const Category = () => {
  return (
    <ProductsCategory>
      <Link to='/products/mug'>
        <li>mug</li>
      </Link>
      <Link to='/products/base'>
        <li>base</li>
      </Link>
      <Link to='/products/bowl'>
        <li>bowl</li>
      </Link>
    </ProductsCategory>
  );
};

export default Category;
