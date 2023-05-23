import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyC8e_RRF1wvWpiftPQm2jbYnV8TykDwhpA',
    cx: '67467de947f154630'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })
    return data;
}