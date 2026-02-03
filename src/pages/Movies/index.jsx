import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../components/MovieCard";
import { getMovies } from "../../services/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res.data.slice(0, 6)))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Title>Selecione o filme</Title>
      <MoviesGrid>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterURL={movie.posterURL}
            data-test="movie"
          />
        ))}
      </MoviesGrid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 67px; 
`;

const Title = styled.h2`
  width: 100%;
  padding: 16px 0; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Sarala', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  margin: 0;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 11px 12px; 
  width: 100%;
  padding-bottom: 40px;
`;