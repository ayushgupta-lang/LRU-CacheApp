import axios from 'axios';

const BASE_URL = 'http://localhost:8090'; 

const CacheService = {
  setKeyValue: (key, value, expiresIn) => {
    return axios.post(`${BASE_URL}/set`, { key, value, expires_in: expiresIn });
  },

  getKeyValue: (key) => {
    return axios.get(`${BASE_URL}/get?key=${key}`);
  },

  deleteKeyValue: (key) => {
    return axios.delete(`${BASE_URL}/delete?key=${key}`);
  }
};

export default CacheService;
