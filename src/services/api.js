import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";

export function getMovies() {
    return axios.get(`${BASE_URL}/movies`);
}

export function getSessions(idFilme) {
    return axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`);
}

export function getSeats(idSessao) {
    // REQUISITO: GET /showtimes/ID_DA_SESSAO/seats
    return axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`);
}

// REQUISITO POST: Reservar assentos usando book-many
export function bookSeats(body) {
    return axios.post(`${BASE_URL}/seats/book-many`, body);
}