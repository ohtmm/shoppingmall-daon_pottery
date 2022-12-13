import { SkeletonContainer } from './StyledComponents';

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <div className='productImg'></div>
      <div className='title'>
        <h2 className='name'></h2>
        <span className='price'></span>
      </div>
      <p className='desc'></p>
      <p className='desc bottom'></p>
    </SkeletonContainer>
  );
};

export default Skeleton;
