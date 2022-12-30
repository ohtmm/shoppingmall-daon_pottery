import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 300px;
  height: 400px;
  border-left: 1px solid ${(props) => props.theme.color.black};
`;

export const CategorizedCardContainer = styled.div`
  display: grid;
  width: 1180px;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
`;
