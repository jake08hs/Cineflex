import styled from "styled-components";
import icon from "../assets/iconemovie.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Content>
        <Logo src={icon} alt="Ícone filme" />
        <Title>Cineflex</Title>
      </Content>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 375px; /* Largura fiel ao protótipo */
  height: 67px;
  background-color: #EE897F;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center;     /* Centraliza o conteúdo verticalmente */
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* Espaço entre ícone e texto */
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 34px;
  color: #FADBC5;
`;
