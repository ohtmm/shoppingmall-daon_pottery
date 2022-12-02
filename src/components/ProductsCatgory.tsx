import { CategorySub, ProductsCategory } from './Header/HeaderStyleComponents';

const Category = () => {
  return (
    <ProductsCategory>
      <li>
        mug
        <CategorySub>
          <li>일자형</li>
          <li>둥근형</li>
        </CategorySub>
      </li>
      <li>
        plate
        <CategorySub>
          <li>일자형</li>
          <li>둥근형</li>
        </CategorySub>
      </li>
      <li>
        bowl
        <CategorySub>
          <li>일자형</li>
          <li>둥근형</li>
        </CategorySub>
      </li>
    </ProductsCategory>
  );
};

export default Category;
