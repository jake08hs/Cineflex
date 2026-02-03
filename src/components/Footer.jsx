import styled from "styled-components";

export default function Footer({ poster, title, info }) {
  return (
    <Container>
      <Poster>
        <img src={poster} alt="Poster do filme" />
      </Poster>

      <Text>
        <p>{title}</p>
        <p>{info}</p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 117px;
  background: #dfe6ed;
  display: flex;
  align-items: center;
  padding: 0 14px;
`;

const Poster = styled.div`
  width: 64px;
  height: 89px;
  background: #ffffff;
  padding: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  margin-left: 14px;
`;
