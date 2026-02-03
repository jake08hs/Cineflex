import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return null;

  return (
    <Container>
      <Title>Pedido finalizado!</Title>

      <ContentBox>
        <Section data-test="movie-info">
          <h3>Filme e sessão</h3>
          <p>{state.movie}</p>
          <p>{state.date} às {state.showtime}</p>
        </Section>

        <Section data-test="seats-info">
          <h3>Ingressos</h3>
          {state.seats.map(s => <p key={s}>Assento {s}</p>)}
        </Section>

        <Section data-test="buyer-info">
          <h3>Comprador(a)</h3>
          <p>Nome: {state.buyer}</p>
          <p>CPF: {state.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p> 
        </Section>
      </ContentBox>

      <HomeButton 
        data-test="go-home-btn" 
        onClick={() => navigate("/")}
      >
        Voltar para tela inicial
      </HomeButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  padding-top: 67px; 
  background-color: #212226;
  min-height: 100vh;
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */
`;

const Title = styled.h2`
  font-family: 'Sarala', sans-serif;
  font-weight: 400; /* Ajustado para peso 400 */
  font-size: 24px;
  color: #9DB899;
  margin: 15px 0; 
  text-align: center;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 335px; /* Limite para manter a estética em telas maiores */
  background-color: #2B2D36;
  border-radius: 8px;
  padding: 12px 18px; 
  display: flex;
  flex-direction: column;
  gap: 8px; 
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #4E5A65;
  padding-bottom: 8px; 
  &:last-child { border: none; padding-bottom: 0; }

  h3 {
    font-family: 'Sarala', sans-serif;
    font-weight: 400; /* Ajustado para peso 400 */
    font-size: 19px;
    color: #EE897F;
    margin-bottom: 2px;
  }
  p {
    font-family: 'Sarala', sans-serif;
    font-weight: 400; /* Garantindo peso 400 no corpo de texto */
    font-size: 16px;
    color: #FFFFFF;
    line-height: 20px;
  }
`;

const HomeButton = styled.button`
  width: 100%;
  max-width: 335px; /* Alinhado com o ContentBox */
  height: 45px;
  background-color: #EE897F;
  color: #2B2D36;
  border: none;
  border-radius: 8px;
  font-family: 'Sarala', sans-serif;
  font-weight: 700; /* Peso 700 mantido no botão para destaque de ação */
  font-size: 18px;
  margin-top: 20px; 
  margin-bottom: 40px;
  cursor: pointer;
`;