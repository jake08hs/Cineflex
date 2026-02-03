import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ id, posterURL }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/sessoes/${id}`)}>
      <img src={posterURL} alt="Poster do filme" />
    </Card>
  );
}
const Card = styled.div`
  width: 145px;  
  height: 210px; 
  border-radius: 8px; 
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;

  img {
    width: 129px; 
    height: 193px;
    object-fit: cover;
    border-radius: 3px;
  }


  &:hover {
    transform: scale(1.02); /* Feedback visual de clique */
    transition: 0.2s;
  }
`;