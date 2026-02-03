import styled from "styled-components";

export default function SectionTitle({ children }) {
  // Usei {children} para que você possa mudar o texto 
  // de "Em cartaz" para "Selecione o horário" etc.
  return (
    <Container>
      <Title>{children || "Em cartaz"}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 110px; /* Aumentado de 67px para 110px para bater com o protótipo */
  margin-top: 67px; /* ESSENCIAL: Isso compensa a altura do seu Header que é Fixed */

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #212226; /* Cor cinza escuro do fundo do protótipo */
`;

const Title = styled.h2`
  font-family: "Sarala", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
`;