//Import tools
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3005/api/v1',
    withCredentials: true
});

// 'Authorization': `Bearer ${localStorage.getItem('user')}`
