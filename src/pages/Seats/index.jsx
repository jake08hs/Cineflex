import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSeats, bookSeats } from "../../services/api";

export default function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]); 
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    if (!idSessao) return;
    getSeats(idSessao)
      .then(res => setData(res.data))
      .catch(err => console.log("Erro no GET:", err));
  }, [idSessao]);

  function handleSeat(seat) {
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, { id: seat.id, name: seat.name }]);
    }
  }

  function finalizarReserva(e) {
    e.preventDefault(); 
    if (selectedSeats.length === 0) return alert("Selecione pelo menos um assento");

    const cpfLimpo = String(cpf).replace(/\D/g, "").trim();

    if (cpfLimpo.length !== 11) {
      return alert(`O CPF precisa de 11 números. O seu tem ${cpfLimpo.length}.`);
    }

    const body = {
      ids: selectedSeats.map(s => Number(s.id)), 
      name: name,
      cpf: cpfLimpo 
    };

    bookSeats(body)
      .then(() => {
        navigate("/sucesso", { 
          state: { 
            movie: data.movie.title, 
            date: data.day.date, 
            showtime: data.name,
            seats: selectedSeats.map(s => s.name),
            buyer: name,
            cpf: cpfLimpo
          } 
        });
      })
      .catch(err => {
        alert(`Erro na API: ${err.response?.data || "Dados inválidos"}`);
      });
  }

  if (!data) return <Container><Loading>Carregando...</Loading></Container>;

  return (
    <Container>
      <Title>Selecione o(s) assento(s)</Title>

      <SeatsGrid>
        {data.seats.map(seat => {
          const isSelected = selectedSeats.find(s => s.id === seat.id);
          return (
            <SeatButton
              key={seat.id}
              $status={!seat.isAvailable ? "unavailable" : isSelected ? "selected" : "available"}
              onClick={() => handleSeat(seat)}
              data-test="seat"
            >
              <span>{seat.name.padStart(2, '0')}</span>
            </SeatButton>
          );
        })}
      </SeatsGrid>

      <Form onSubmit={finalizarReserva}>
        <label>Nome do comprador(a)</label>
        <input 
          data-test="client-name" 
          placeholder="Digite seu nome..." 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
        
        <label>CPF do comprador(a)</label>
        <input 
          data-test="client-cpf" 
          placeholder="Digite seu CPF (11 dígitos)..." 
          value={cpf} 
          onChange={e => setCpf(e.target.value)} 
          required 
        />
        
        <ReserveButton type="submit" data-test="book-seat-btn">Reservar assento(s)</ReserveButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  padding-top: 67px; 
  background-color: #212226; 
  min-height: 100vh;
  box-sizing: border-box;
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
`;

const SeatsGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(10, 26px); 
  gap: 18px 7px; 
  justify-content: center; 
  margin-bottom: 40px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

const SeatButton = styled.button`
  width: 26px; 
  height: 26px; 
  border-radius: 50%; 
  font-size: 11px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
  background-color: ${props => 
    props.$status === "selected" ? "#FADBC5" : 
    props.$status === "available" ? "#9DB899" : "#2B2D36"}; 
  border: ${props => props.$status === "selected" ? "2px solid #EE897F" : "none"}; 
  color: #2B2D36;
  span { display: ${props => props.$status === "unavailable" ? "none" : "block"}; }
`;

const Form = styled.form`
  display: flex; 
  flex-direction: column; 
  padding: 0 24px; 
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  label { 
    color: #FFFFFF; 
    font-size: 18px; 
    font-family: 'Sarala'; 
    font-weight: 400; 
  }
  input { 
    height: 40px; 
    border-radius: 8px; 
    border: none; 
    padding-left: 15px; 
    font-size: 16px; 
    background-color: white; 
  }
`;

const ReserveButton = styled.button`
  width: 100%; 
  height: 45px; 
  background-color: #EE897F; 
  color: #2B2D36; 
  border: none; 
  border-radius: 8px; 
  font-family: 'Sarala'; 
  font-weight: 700; 
  font-size: 18px; 
  margin-top: 30px; 
  margin-bottom: 30px;
  cursor: pointer;
`;

const Loading = styled.div`color: white; margin-top: 100px; text-align: center; font-family: 'Sarala';`;