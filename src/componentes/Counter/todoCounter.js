import React from "react";
import "./todoCounter.css";

function TodoCounter({total, completed}) {
  return (
    <>
      <h2 className="titulo">To Do List</h2>
      <h3 className="sub-titulo"> Has complentado {completed} de {total} To Dos </h3>
    </>
  );
}

export { TodoCounter };
