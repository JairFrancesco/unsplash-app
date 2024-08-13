export interface Tag {
  title: string;
}

export interface Url {
  small: string;
}

export interface User {
  name: string;
}

export interface Photo {
  id: string;
  urls: Url;
  tags: Tag[];
  created_at: string;
  alt_description: string;
  user: User;
}

export interface PhotosResponse {
  photos: Photo[];
}
