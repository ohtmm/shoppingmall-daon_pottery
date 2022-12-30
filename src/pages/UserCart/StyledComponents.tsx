import styled from 'styled-components';

export const CartContainer = styled.ul`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  list-style: none;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.color.darkBlack};

  h1 {
    position: absolute;
    top: 3rem;
    left: 0;
    margin: 0;
    width: 16rem;
    height: 2.5rem;
    padding-right: 1rem;
    text-align: right;
    color: ${(props) => props.theme.color.darkBlack};
    outline: 1px solid ${(props) => props.theme.color.brown};
    outline-offset: 2px;
    background-color: ${(props) => props.theme.color.deepOrange};
    border-radius: 10px;

    @media screen and (max-width: 500px) {
      left: 0;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10rem;
    color: ${(props) => props.theme.color.white};
  }
`;

export const CartItem = styled.li`
  position: relative;
  width: 60%;
  margin: 0 auto;
  height: 10rem;
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #3f3f3f4a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};

  @media screen and (max-width: 500px) {
    margin-top: 5rem;
    width: 85%;
  }
  img {
    display: block;
    width: 8rem;
    margin-right: 1rem;
    outline: 1px solid ${(props) => props.theme.color.vanilla};
  }
  .label {
    font-size: small;
    color: #aaa;
  }

  .buttonBox {
    position: absolute;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 10rem;
    height: 60%;
    padding-left: 0.5rem;
    border-left: 1px solid ${(props) => props.theme.color.deepOrange};
    @media screen and (max-width: 500px) {
      border-left: none;
      bottom: 0;
    }
  }
`;
