import axios from 'axios';
import {PostResponseInterace} from '../interfaces/post.response';
import {showToast} from './utils';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const fetchData = async (page:number): Promise<PostResponseInterace[]> => {
  try {
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=10`);
    let data: PostResponseInterace[] = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchPostDetails = async (
  postId: number,
): Promise<PostResponseInterace> => {
  try {
    const response = await axios.get(`${API_URL}${postId}`);
    const data: PostResponseInterace = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
