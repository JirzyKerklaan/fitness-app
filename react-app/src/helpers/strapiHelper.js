import axios from 'axios';

let BASE_URL = "http://localhost:1337/api";

export const getCollectionEntry = (collection, entry = '') => {
    return axios
        .get(`${BASE_URL}/${collection}/${entry}`)
        .then(response => response.data.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

export const getCollectionEntries = (collection) => {
    return axios
        .get(`${BASE_URL}/${collection}`)
        .then(response => response.data.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};
