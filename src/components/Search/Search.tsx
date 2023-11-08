import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss"
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const handleContentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const SearchPhoto = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery("")
      navigate(`/search/${query}`)
    }
  };
  return (
    <form className="search_form">
      <input
        type="text"
        placeholder="Search what you want ..."
        onKeyDown={SearchPhoto}
        onChange={handleContentInput}
        className="search_input"
        value={query}
      />
      <BiSearchAlt className="icon_search" />
    </form>
  );
};

export default Search;
