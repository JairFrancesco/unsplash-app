import React, { useEffect, useState } from 'react';
import { searchPhotos } from '../services/photoService';
import { useParams } from 'react-router-dom';
import PhotoList from '../components/PhotoList';
import SearchBar from '../components/SearchBar';

const TagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const [photos, setPhotos] = useState([]);
  const [label, setLabel] = useState(`Results for ${tag}`);

  const handleSearch = async (query: string) => {
    const photos = await searchPhotos(query);
    setPhotos(photos);
    setLabel('Results');
  };

  useEffect(() => {
    if (tag) {
      searchPhotos(tag).then(setPhotos);
    }
  }, [tag]);

  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <SearchBar onSearch={handleSearch} query={tag} />
      <strong>{label}</strong>
      <PhotoList photos={photos} />
    </div>
  );
};

export default TagPage;
