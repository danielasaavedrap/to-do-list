import React from "react";
import { TodoCounter } from "./componentes/Counter/todoCounter";
import { TodoSearch } from "./componentes/Search/todoSearch.js";
import { TodoList } from "./componentes/list/todoList.js";
import { TodoItem } from "./componentes/items/todoItem.js";
import { CreateTodoButtom } from "./componentes/button/todoButton.js";

function AppUI({
  error,
  loading,
  totalToDo,
  completedToDo,
  searchValue,
  setSearchValue,
  searchedToDo,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter total={totalToDo} completed={completedToDo} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
      {error && <p>Ups! hay un error</p>}
      {loading && <p>¡Estamos cargando la pagina!</p>}
      {(!loading && !searchedToDo.length) && <p>¡Crea tu primer To Do!</p>}


        {searchedToDo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export { AppUI };
