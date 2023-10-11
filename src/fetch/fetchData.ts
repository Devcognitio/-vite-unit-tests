import axios from 'axios';
import { AxiosTest } from './axiosTest';

const fetchData = async () => {
  try {
    const response = await axios.get('https://example.com/api/data');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchTest = async () => {
    try {
      const response = await new AxiosTest().get('https://example.com/api/data');
      return response.data;
    } catch (error) {
      return error;
    }
  };

export default fetchData;
