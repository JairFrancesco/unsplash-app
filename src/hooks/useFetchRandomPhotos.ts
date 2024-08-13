import { useState, useEffect } from 'react';
import { loadPhotos } from '../services/photoService';
import { Photo } from '../types';

const useFetchRandomPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photosWithDetails = await loadPhotos();
        setPhotos(photosWithDetails);
      } catch (err) {
        setError('Failed to load photos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, setPhotos, loading, error };
};

export default useFetchRandomPhotos;
