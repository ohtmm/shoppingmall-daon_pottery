import styled from 'styled-components';

export const HomeLayout = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 0 1rem 0rem;
`;

export const HomeContents = styled.article`
  position: relative;
  width: 30%;
  img {
    display: block;
    width: 100%;
  }
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #bbbbbb43;
  }
`;
