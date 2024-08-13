import axios from 'axios';
import { Photo } from '../types';

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
}

export const fetchRandomPhotos = async () => {
  const response = await axios.get(`${UNSPLASH_BASE_URL}/photos/random`, {
    headers: headers,
    params: { count: 10 },
  });
  return response.data;
};

export const fetchPhotoDetails = async (photoId: string) => {
  try {
    const response = await axios.get(`${UNSPLASH_BASE_URL}/photos/${photoId}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for photo ${photoId}:`, error);
    throw error;
  }
};

export const searchPhotos = async (query: string) => {
  const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
    headers: headers,
    params: { query, per_page: 10 },
  });
  return response.data.results;
};

export const loadPhotos = async () => {
    try {
      const randomPhotos = await fetchRandomPhotos();
      const photosWithDetails = await Promise.all(
        randomPhotos.map(async (photo: Photo) => {
          const detailedPhoto = await fetchPhotoDetails(photo.id);
          return { ...photo, ...detailedPhoto };
        })
      );
      return photosWithDetails;
    } catch (error) {
      console.error("Failed to load photos", error);
      throw error;
    }
};
