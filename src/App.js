
import react from "react";
import { TodoCounter } from "./componentes/Counter/todoCounter";
import { TodoSearch } from "./componentes/Search/todoSearch.js";
import { TodoList } from "./componentes/list/todoList.js";
import { TodoItem } from "./componentes/items/todoItem.js";
import { CreateTodoButtom } from "./componentes/button/todoButton.js";
//import "./App.css";

const todos=[
  {text: "dibujar una hora al dia", completed: true},
  {text: "practicar react", completed: false},
  {text: "almorzar con amigos", completed: false},
  {text: "visitar la FILBO", completed: false},
  {text: "ver turning red", completed: false}
];

function App() {
  return (
   <react.Fragment>
      <TodoCounter  />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
