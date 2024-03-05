import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.MYSQL_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});
