import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions"; 
import Seats from "./pages/Seats";     
import Success from "./pages/Success"; 
import Header from "./components/Header";

export default function App() {
  return (
    <Main>
      <ContainerMobile>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route path="/assentos/:idSessao" element={<Seats />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </ContainerMobile>
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const ContainerMobile = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #212226;
  display: flex;
  flex-direction: column;
  position: relative;
`;