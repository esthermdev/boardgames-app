const testImageUrl = 'https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        try {
            const imagePath = require(`../app/assets/img/${item.image}`);
            return { ...item, image: imagePath };
        } catch (error) {
            console.error(`Error loading image for ${item.name}:`, error);
            return { ...item, image: testImageUrl }; // Set a default image if the specific one is not found
        }
    });
};