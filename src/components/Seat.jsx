import styled from "styled-components";

export default function Seat({ children, $status, onClick }) {
  return (
    
    <SeatItem $status={$status} onClick={onClick} data-test="seat">
      <span>{children}</span>
    </SeatItem>
  );
}

const SeatItem = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-family: 'Roboto', sans-serif;
  cursor: ${props => (props.$status === "unavailable" ? "not-allowed" : "pointer")};

 
  background-color: ${props => {
    if (props.$status === "selected") return "#FADBC5";    
    if (props.$status === "available") return "#9DB899"; 
    return "#2B2D36";                                     
  }};

  /* A cor do texto é sempre a mesma do fundo indisponível */
  color: #2B2D36; 
  
  /* Borda rosa apenas no selecionado conforme requisito */
  border: ${props => (props.$status === "selected" ? "2px solid #EE897F" : "none")};
  
  /* REQUISITO: O número fica "escondido" no indisponível */
  span {
    display: ${props => (props.$status === "unavailable" ? "none" : "block")};
  }
`;