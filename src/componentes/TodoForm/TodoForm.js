import React from "react";
import { TodoContext } from "../../TodoContext/index";
import "./Todo.css";

function TodoForm() {
  const [newValue, setNewValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = (event) => {
      event.preventDefault(); //no se va a recargar la pagina
    addTodo(newValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onAdd}>
      <label>Escribe tu nuevo To Do</label>
      <textarea value={newValue} onChange={onChange} placeholder="Ingrese nueva tarea" />
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add" > Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
