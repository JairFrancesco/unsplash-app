import React from 'react';
import {
  GalleryItemContainer,
  Image,
  Info,
  Left,
  Author,
  Date,
  Right,
  Tag,
} from './styles';
import { formatDate } from '../../utils/dateUtils';
import { useNavigate } from 'react-router-dom';
import { Photo, Tag as TagType } from '../../types';

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const navigate = useNavigate();
  const tags = photo.tags || [];

  const handleTagClick = (tag: string) => {
    navigate(`/tag/${tag}`);
  };

  return (
    <GalleryItemContainer>
      <Image src={photo.urls.small} alt={photo.alt_description} />

      <Info>
        <Left>
          <Author>
            by <strong>{photo.user.name}</strong>
          </Author>
          <Date>{formatDate(photo.created_at)}</Date>
        </Left>

        <Right>
          {tags.slice(0, 3).map((tag: TagType) => (
            <Tag
              onClick={() => {
                handleTagClick(tag.title);
              }}
              key={tag.title}
              className="tag"
            >
              {tag.title}
            </Tag>
          ))}
        </Right>
      </Info>
    </GalleryItemContainer>
  );
};

export default PhotoCard;
