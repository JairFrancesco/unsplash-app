import React, { useState } from 'react';
import useFetchRandomPhotos from '../hooks/useFetchRandomPhotos'
import SearchBar from '../components/SearchBar';
import PhotoList from '../components/PhotoList';
import { searchPhotos } from '../services/photoService';


const HomePage: React.FC = () => {
  const { photos, setPhotos } = useFetchRandomPhotos();
  const [label, setLabel] = useState('Trending Photos Right Now')

  const handleSearch = async (query: string) => {
    const photos = await searchPhotos(query)
    setPhotos(photos)
    setLabel('Results')
  };

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <SearchBar onSearch={handleSearch} />
      <strong>{ label }</strong>
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomePage;
