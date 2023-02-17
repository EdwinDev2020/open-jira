import axios from 'axios';

const entriesApi = axios.create({
    // al salir del mismo dominio, basta con solo ser asi
    baseURL: '/api'
});

export default entriesApi;