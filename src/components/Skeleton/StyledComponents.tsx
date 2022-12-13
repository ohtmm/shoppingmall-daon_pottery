import styled from 'styled-components';
import { ProductCardContainer } from '../ProductCard/StyleComponents';

export const SkeletonContainer = styled(ProductCardContainer)`
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }
  .productImg {
    width: 100%;
    height: 20rem;
    background-color: ${(props) => props.theme.color.lightGray};
    overflow: hidden;
    position: relative;
  }

  .name {
    width: 40%;
    height: 2rem;
    background-color: ${(props) => props.theme.color.lightGray};
    overflow: hidden;
    position: relative;
  }
  .price {
    top: 0.5rem;
    border-color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.lightGray};
    overflow: hidden;
    position: relative;
  }
  .desc {
    height: 0.1rem;
    border-top: none;
    outline: 1px solid ${(props) => props.theme.color.lightGray};
    background-color: ${(props) => props.theme.color.lightGray};
    overflow: hidden;
    position: relative;
  }

  .bottom {
    width: 60%;
  }

  .productImg:before,
  .name:before,
  .price:before,
  .desc:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;
