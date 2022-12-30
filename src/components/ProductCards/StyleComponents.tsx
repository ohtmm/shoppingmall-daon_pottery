import styled from 'styled-components';

export const HomeProductContainer = styled.div`
  width: 300px;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.color.black};

  @media screen and (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 1200px;
  }
`;

export const CategorizedCardContainer = styled.div`
  display: grid;
  width: 1180px;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
