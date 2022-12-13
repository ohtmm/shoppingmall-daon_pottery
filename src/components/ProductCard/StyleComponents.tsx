import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  transition: all 0.5s linear;
  :hover {
    transform: scale(1.02);
  }
  .productImg {
    display: block;
    width: 100%;
    cursor: pointer;
  }
  .desc {
    width: 80%;
    border-top: 1px solid ${(props) => props.theme.color.brown};
    padding-top: 1rem;
    font-size: small;
  }
  .title {
    position: relative;
  }

  .price {
    position: absolute;
    right: 0rem;
    bottom: -2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 3rem;
    font-size: small;
    font-weight: 600;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.brown};
    border-radius: 100%;
  }

  .bookMark {
    position: absolute;
    right: 1.3rem;
    bottom: -3.5rem;
    font-size: large;
    cursor: pointer;
  }
`;

//
