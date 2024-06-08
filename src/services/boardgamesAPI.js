import axios from 'axios';

const API_URL = 'http://localhost:8000/api/boardgames';

export const fetchBoardgames = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching boardgames:', error);
        throw error;
    }
};

export const addBoardgame = async (boardgame) => {
    try {
        const response = await axios.post(API_URL, boardgame);
        return response.data 
    } catch (error) {
        console.error('Error adding boardgame:', error);
        throw error;
    }
};

export const removeBoardgame = async (boardgameId) => {
    try {
        const response = await axios.delete(`${API_URL}/${boardgameId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting boardgame:', error);
        throw error;
    }
};

export const updateBoardgame = async (boardgameId, boardgame) => {
    try {
        const response = await axios.put(`${API_URL}/${boardgameId}`, boardgame);
        console.log(response.data);
        return response.data;
    } catch (error) {   
        console.error('Error updating boardgame:', error);
        throw error;
    }
}
