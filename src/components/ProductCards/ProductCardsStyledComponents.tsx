import styled from 'styled-components';

export const ProductCardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  border-right: 1px solid #000;
`;

export const ProductCardContainer = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.black};
`;
