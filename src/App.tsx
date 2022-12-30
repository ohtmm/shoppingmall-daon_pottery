import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <Header />
      <Outlet />
    </Wrap>
  );
}

const Wrap = styled.div`
  @media screen and (max-width: 500px) {
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
`;
export default App;
