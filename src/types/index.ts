export interface Tag {
    id: string;
    title: string;
}

export interface Url {
    small: string
}

export interface User {
    name: string
}

export interface Photo {
    id: string;
    urls: Url;
    title: string;
    tags: Tag[];
    author: string;
    created_at: string;
    alt_description: string;
    user: User;
}

export interface PhotosResponse {
    photos: Photo[];
}
  