import styled from "styled-components";
import Header from "../Header";

export default function PageLayout({ title, children }) {
  return (
    <PageContainer>
      <Header />
      <SectionTitle>{title}</SectionTitle>
      <Content>
        {children}
      </Content>
    </PageContainer>
  );
}

/* styles */

const PageContainer = styled.div`
  width: 375px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sarala', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza o grupo de cards */
  gap: 11px 30px; /* 11px de distância vertical, 30px horizontal */
  padding: 0 20px; /* Respiro lateral para os cards não colarem na borda do celular */
  margin-top: 40px; /* Distância entre o título "Em Cartaz" e os filmes */
`;