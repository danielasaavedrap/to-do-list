import React from "react";
import "./todoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Buscador"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
