import React from "react";
import { TodoContext } from "../../TodoContext";
import "./todoSearch.css";

function TodoSearch() {
const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
