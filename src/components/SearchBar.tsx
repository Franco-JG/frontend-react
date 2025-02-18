import React from "react";
import UpdateNewsButton from "./UpdateNewsButton";
import { SearchBarProps } from "../types";

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {

  const [query, setQuery] = React.useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <div className="search-container m-4">
      {/* Search Bar */}
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control rounded-start-3 shadow-sm"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-primary shadow-sm"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Filter Buttons + Update Button */}
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Botones de filtro alineados a la izquierda */}
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary rounded-3 shadow-sm">
            Title
          </button>
          <button className="btn btn-outline-secondary rounded-3 shadow-sm">
            Description
          </button>
          <button className="btn btn-outline-secondary rounded-3 shadow-sm">
            Pub Date
          </button>
          <button className="btn btn-outline-secondary rounded-3 shadow-sm">
            Created Date
          </button>
        </div>
        <UpdateNewsButton />
      </div>
    </div>
  );
};

export default SearchBar;
