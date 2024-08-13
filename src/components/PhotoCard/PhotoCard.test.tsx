import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import PhotoCard from './PhotoCard';
import { Photo } from '../../types';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('PhotoCard', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  const photo: Photo = {
    id: '1',
    created_at: '2023-08-12T00:00:00Z',
    alt_description: 'A beautiful scene',
    urls: { small: 'image-url.jpg' },
    user: { name: 'John Doe' },
    tags: [{ title: 'nature' }, { title: 'landscape' }, { title: 'outdoor' }],
  };

  it('should render the photo with correct details', () => {
    render(<PhotoCard photo={photo} />);

    expect(screen.getByAltText('A beautiful scene')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should render up to three tags and handle clicks', () => {
    render(<PhotoCard photo={photo} />);

    expect(screen.getByText('nature')).toBeInTheDocument();
    expect(screen.getByText('landscape')).toBeInTheDocument();
    expect(screen.getByText('outdoor')).toBeInTheDocument();

    fireEvent.click(screen.getByText('nature'));
    expect(navigate).toHaveBeenCalledWith('/tag/nature');

    fireEvent.click(screen.getByText('landscape'));
    expect(navigate).toHaveBeenCalledWith('/tag/landscape');

    fireEvent.click(screen.getByText('outdoor'));
    expect(navigate).toHaveBeenCalledWith('/tag/outdoor');
  });

  it('should handle photos with no tags', () => {
    const photoWithoutTags = { ...photo, tags: [] };
    render(<PhotoCard photo={photoWithoutTags} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
