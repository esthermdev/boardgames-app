export const config = (token) => {
    return {
        headers: { Authorization: `Bearer ${token}`}
    }
};
