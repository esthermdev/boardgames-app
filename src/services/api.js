import axios from 'axios';

const API_URL = 'http://localhost:8000/api/boardgames';

export const fetchBoardgames = () => {
    const response = axios.get(API_URL);
    return response.data;
};

export const addBoardgame = async (boardgame) => {
    const response = await axios.post(API_URL, boardgame);
    return response.data;
};

export const removeBoardgame = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
