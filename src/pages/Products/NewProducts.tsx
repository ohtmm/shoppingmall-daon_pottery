import { useState } from 'react';
import setDataBase from '../../service/db/setDatabase';

export type TimageUploaded = File | null;
export type TProduct = {
  name?: string;
  price?: number;
  description?: string;
  photoURL?: string | null;
};
const NewProducts = () => {
  const [imageUploaded, setImageUploaded] = useState<TimageUploaded>(null);
  const [uploading, setUploading] = useState(false);
  const [product, setProduct] = useState<TProduct | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    if (e.target.files) {
      setDataBase(e.target.files[0])
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
  return (
    <div>
      <h2>add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='제품 이름은 무엇인가요?'
          value={product?.name}
          onChange={handleInput}
        />
        <input
          type='text'
          name='price'
          placeholder='제품 가격은 얼마인가요?'
          value={product?.price}
          onChange={handleInput}
        />
        <input
          type='textarea'
          name='description'
          placeholder='제품을 설명해주세요'
          value={product?.description}
          onChange={handleInput}
        />
        <input
          type='file'
          id='image'
          accept='image/*'
          required
          onChange={handleAddImage}
        />
        <button type='submit'>추가</button>
      </form>

      {product?.photoURL && (
        <div>
          <img
            src={`${product.photoURL}`}
            alt='uploaded image'
            style={{
              display: 'block',
              width: '100px',
            }}
          />
        </div>
      )}
    </div>
  );
};
export default NewProducts;
