import styled from 'styled-components';

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GalleryItemContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  height: 280px;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 0 0 8px 8px;
  font-size: 13px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.div`
  margin: 0;
`;

export const Date = styled.div`
  margin: 0;
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid;
  border-color: white;
  color: white;
`;
