import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.black};
`;

export const CategorizedCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
