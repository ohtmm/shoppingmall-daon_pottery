import { useParams } from 'react-router-dom';
import ProductCards from '../../../components/ProductCards/ProductCards';
import { CategorizedContainer } from './StyleComponents';
import useProducts from '../../../lib/hooks/useProducts';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const { products } = useProducts(category);
  return (
    <CategorizedContainer>
      <ProductCards products={products} categorized />
    </CategorizedContainer>
  );
};

export default Products;
