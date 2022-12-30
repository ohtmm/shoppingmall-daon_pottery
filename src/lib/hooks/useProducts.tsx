import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductsAll, setNewProduct } from '../../api/firebase';
import { TProduct } from '../../pages/Products/NewProducts/NewProducts';

export default function useProducts(categoryName?: string) {
  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['products'], getProductsAll, {
    select: (products) => {
      if (categoryName) {
        return products.filter((product) => product.category === categoryName);
      } else {
        return products;
      }
    },
  });

  const addNewProduct = useMutation(
    (newProduct: TProduct) => setNewProduct(newProduct),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products']);
      },
    }
  );
  return { products, addNewProduct, isLoading, isError };
}
