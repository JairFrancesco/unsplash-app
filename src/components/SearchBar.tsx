import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  query?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  query: queryProp,
}) => {
  const [query, setQuery] = useState(queryProp || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <strong>Search by tag</strong>
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search photos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
