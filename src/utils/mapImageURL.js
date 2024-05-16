import { baseUrl } from '../app/shared/baseUrl';

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + 'images/' + item.image
        };
    });
};