import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  padding: 24px 16px;
  background-color: #212226;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const MoviesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 16px;
`;
