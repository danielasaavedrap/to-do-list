import React from "react";
import { TodoContext } from "../../TodoContext";
import "./todoCounter.css";

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext (TodoContext);
  return (
    <>
      <h2 className="titulo">To Do List</h2>
      <h3 className="sub-titulo"> Has complentado {completedTodos} de {totalTodos} To Dos </h3>
    </>
  );
}

export { TodoCounter };
