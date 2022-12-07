import { useState } from 'react';
import setStorage from '../../../service/db/setStorage';
import { v4 as uuid } from 'uuid';
import setDatabase from '../../../service/db/setDatabase';
import { NewProductsContainer } from './NewProductsStyleComponents';
import { useContext } from 'react';
import { ProductsContext } from '../../../lib/context/productsContext';

export type TimageUploaded = File | null;
export type TProduct = {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  photoURL?: string | null;
  category?: string;
};
const NewProducts = () => {
  const value = useContext(ProductsContext);
  const [uploading, setUploading] = useState(false);
  const [product, setProduct] = useState<TProduct | null>(initialized);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regist = {
      ...product,
      id: uuid(),
    };
    setDatabase(regist);
    setProduct(initialized);
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    if (e.target.files) {
      setStorage(e.target.files[0])
        .then((url) => {
          const uploaded = { ...product, photoURL: url };
          setProduct(uploaded);
        })
        .catch((e) => console.log(`이미지를 찾을 수 없습니다`, e))
        .finally(() => setUploading(false));
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...product, [e.target.name]: e.target.value };
    setProduct(updated);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = { ...product, category: e.target.value };
    setProduct(selected);
  };
  return (
    <NewProductsContainer>
      <h2>
        상품을 등록해주세요
        {product?.photoURL && (
          <div className='uploadedImg'>
            <img src={`${product.photoURL}`} alt='uploaded image' />
          </div>
        )}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='제품 이름은 무엇인가요?'
          value={product?.name}
          onChange={handleInput}
          required
        />
        <input
          type='text'
          name='price'
          placeholder='제품 가격은 얼마인가요?'
          value={product?.price}
          onChange={handleInput}
          required
        />
        <select onChange={handleSelect} value={product?.category}>
          <option defaultChecked value='none'>
            none
          </option>
          <option value='mug'>mug</option>
          <option value='base'>base</option>
          <option value='bowl'>bowl</option>
        </select>
        <input
          type='textarea'
          name='description'
          placeholder='제품을 설명해주세요'
          value={product?.description}
          onChange={handleInput}
          required
        />

        <input
          type='file'
          id='image'
          accept='image/*'
          required
          onChange={handleAddImage}
          className='imageUploader'
        />

        {!uploading && <button type='submit'>등록</button>}
      </form>
    </NewProductsContainer>
  );
};
export default NewProducts;

const initialized = {
  id: '',
  name: '',
  price: 0,
  description: '',
  photoURL: '',
  category: 'none',
};
