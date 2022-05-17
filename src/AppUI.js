import React from "react";
import { TodoContext } from "./TodoContext/index.js";
import { TodoCounter } from "./componentes/Counter/todoCounter.js";
import { TodoSearch } from "./componentes/Search/todoSearch.js";
import { TodoList } from "./componentes/list/todoList.js";
import { TodoItem } from "./componentes/items/todoItem.js";
import { CreateTodoButton } from "./componentes/button/todoButton.js";
import { Modal } from "./componentes/modal/modal.js";
import { TodoForm } from "./componentes/TodoForm/TodoForm";
import errorr from "./imagenes/robot error.png";
import esperandoo from "./imagenes/robot esperar.png";
import agrega from "./imagenes/robot buscar.png";
import "./AppUI.css";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <img src={errorr} alt="error" className="imagenRobot" />        }
        {loading && <img src={esperandoo} alt="cargando" width={400}  className="imagenRobot"/>  }
        {!loading && !searchedTodos.length && <img src={agrega} alt="agregar" className="imagenRobot" />  }

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal &&
        (<Modal>
          <TodoForm />
        </Modal>)
      }
      <CreateTodoButton 
        setOpenModal = {setOpenModal}
        openModal = {openModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
