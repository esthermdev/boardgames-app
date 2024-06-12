import axios from 'axios';

const API_URL = '/api/users';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data.token;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// export const refreshToken = async () => {
//     try {
//         const response = await axios.post(`${API_URL}/token`, {}, { withCredentials: true });
//         return response.data.token;
//     } catch (error) {
//         console.error('Error refreshing website:', error);
//         throw error;
//     }
// };