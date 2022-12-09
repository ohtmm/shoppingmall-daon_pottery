import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  width: 85%;
  padding: 3rem;
  display: flex;
  background-color: ${(props) => props.theme.color.darkBlack};

  img {
    display: block;
    width: 40%;
  }

  .productInfo {
    position: relative;
    margin-left: 2rem;
    width: 100%;

    .name {
      color: ${(props) => props.theme.color.white};
      padding: 1rem;
      font-size: xx-large;
    }
    .price {
      position: absolute;
      right: 0;
      top: 4rem;
      padding: 1rem;
      color: ${(props) => props.theme.color.white};
      border-radius: 10px;
      background-color: ${(props) => props.theme.color.brown};
    }
    .desc {
      position: absolute;
      left: 1rem;
      top: 8rem;
      width: 85%;
      padding: 2rem;
      border-radius: 4px;
      color: ${(props) => props.theme.color.black};
      font-weight: 600;
      background-color: ${(props) => props.theme.color.white};
      font-size: medium;
    }
  }
`;
