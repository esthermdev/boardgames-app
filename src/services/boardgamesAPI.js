import axios from 'axios';

const API_URL = '/api/boardgames';

const getConfig = (token) => ({
    headers: { Authorization: `Bearer ${token}` }
});

export const fetchBoardgames = async (token) => {
    try {
        const response = await axios.get(API_URL, getConfig(token));
        return response.data;
    } catch (error) {
        console.error('Error fetching boardgames:', error);
        throw error;
    }
};

export const addBoardgame = async (boardgame, token) => {
    try {
        const response = await axios.post(API_URL, boardgame, getConfig(token));
        return response.data 
    } catch (error) {
        console.error('Error adding boardgame:', error);
        throw error;
    }
};

export const removeBoardgame = async (boardgameId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/${boardgameId}`, getConfig(token));
        return response.data;
    } catch (error) {
        console.error('Error deleting boardgame:', error);
        throw error;
    }
};

export const updateBoardgame = async (boardgameId, boardgame, token) => {
    try {
        const response = await axios.put(`${API_URL}/${boardgameId}`, boardgame, getConfig(token));
        console.log(response.data);
        return response.data;
    } catch (error) {   
        console.error('Error updating boardgame:', error);
        throw error;
    }
}
