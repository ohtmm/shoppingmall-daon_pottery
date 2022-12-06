import styled from 'styled-components';

export const NewProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: ${(props) => props.theme.color.black};

  h2 {
    position: relative;
    font-size: x-larger;
    color: ${(props) => props.theme.color.white};
  }
  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 2rem;
    width: 20rem;
    height: 10rem;
  }

  input {
    width: 20rem;
    height: 2rem;
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  .imageUploader {
    margin: 1rem 0;
    color: ${(props) => props.theme.color.white};
  }
  button {
    display: block;
    width: 5rem;
    height: 5rem;
    margin-top: 2rem;
    font-size: 1rem;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.brown};
    border-radius: 100%;
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }

  .uploadedImg {
    position: absolute;
    left: 1rem;
    top: 4rem;
    width: 10rem;
    height: 10rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
`;
