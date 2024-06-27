import axios from 'axios';

let BASE_URL = "https://zenquotes.io/api/quotes";

export const getQuote = () => {
    return axios
        .get(`${BASE_URL}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};
