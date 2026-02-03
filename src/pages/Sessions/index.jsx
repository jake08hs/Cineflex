import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSessions } from "../../services/api";

export default function Sessions() {
  const { idFilme } = useParams();
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getSessions(idFilme).then(res => setMovieData(res.data));
  }, [idFilme]);

  if (!movieData) return <Loading>Carregando...</Loading>;

  const horariosExtras = ["10:00", "12:00", "15:00", "18:00", "21:00"];

  return (
    <Container>
      <Title>Selecione o horário</Title>
      {movieData.days.slice(0, 4).map((day, index) => (
        <SessionCard key={day.id} data-test="movie-day">
          <h3>{day.weekday} - {day.date}</h3>
          <ButtonsContainer>
            {index === 1 ? (
              horariosExtras.map((hora, i) => (
                <TimeButton key={i} onClick={() => navigate(`/assentos/${day.showtimes[0]?.id || 0}`)} data-test="showtime">
                  {hora}
                </TimeButton>
              ))
            ) : (
              day.showtimes.map(time => (
                <TimeButton key={time.id} onClick={() => navigate(`/assentos/${time.id}`)} data-test="showtime">
                  {time.name}
                </TimeButton>
              ))
            )}
          </ButtonsContainer>
        </SessionCard>
      ))}
    </Container>
  );
}

const Container = styled.div` width: 100%; padding-top: 67px; `;

const Title = styled.h2`
  width: 100%; padding: 16px 0; text-align: center;
  font-family: 'Sarala', sans-serif; font-weight: 400; font-size: 24px; color: #FFFFFF;
`;

const SessionCard = styled.div`
  width: calc(100% - 40px); max-width: 335px; background-color: #2B2D36; border-radius: 8px; padding: 20px; margin: 0 auto 20px auto;
  h3 { color: #FFFFFF; font-size: 20px; font-family: 'Sarala'; border-bottom: 1px solid #4E5159; padding-bottom: 16px; margin-bottom: 20px; font-weight: 400; }
`;

const ButtonsContainer = styled.div` display: flex; flex-wrap: wrap; gap: 12px; `;

const TimeButton = styled.button`
  width: 84px; height: 43px; border: 1px solid #EE897F; background: transparent; color: #EE897F; border-radius: 4px; cursor: pointer; font-family: 'Sarala'; font-size: 16px;
`;

const Loading = styled.div` color: white; text-align: center; margin-top: 100px; `;