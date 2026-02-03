import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export function getMovies() {
    return api.get("/movies");
}

export function getSessions(idFilme) {
    return api.get(`/movies/${idFilme}/showtimes`);
}

export function getSeats(idSessao) {
    return api.get(`/showtimes/${idSessao}/seats`);
}

export function bookSeats(body) {
    return api.post("/seats/book-many", body);
}