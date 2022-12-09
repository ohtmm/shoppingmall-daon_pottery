import styled from 'styled-components';

export const DetailContainer = styled.section`
  display: flex;
`;

export const DetailSider = styled.aside`
  width: 10%;
  height: 100vh;
  overflow-y: hidden;
`;

export const OtherProduct = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;
export const ProductDetailContainer = styled.div`
  width: 95%;
  padding: 3rem 3rem 0 3rem;
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
      width: 24rem;
      padding-left: 0.2rem;
      padding-bottom: 1rem;
      right: 0rem;
      top: 20rem;
      font-size: large;
      border-bottom: 1px solid #fff;
      color: ${(props) => props.theme.color.white};
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

    .btn {
      position: absolute;
      right: 0;
      top: 19.8rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
      border: none;
      outline: 0.5px solid ${(props) => props.theme.color.brown};
      outline-offset: 3px;
      :hover {
        background-color: ${(props) => props.theme.color.deepOrange};
      }
    }

    .cart {
      right: 6.5rem;
      background-color: ${(props) => props.theme.color.brown};
    }
  }
`;
