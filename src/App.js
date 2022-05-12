import React from "react";
import { AppUI } from "./AppUI";

//const defToDos = [
// { text: "dibujar una hora al dia", completed: true },
//  { text: "practicar react", completed: true },
//  { text: "almorzar con amigos", completed: false },
//{ text: "visitar la FILBO", completed: false },
//  { text: "ver turning red", completed: false },
//];`

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedToDo = todos.filter((todo) => !!todo.completed).length;
  const totalToDo = todos.length;

  let searchedToDo = [];

  if (!searchValue.length >= 1) {
    searchedToDo = todos;
  } else {
    searchedToDo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveToDos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveToDos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      totalToDo={totalToDo}
      completedToDo={completedToDo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDo={searchedToDo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
