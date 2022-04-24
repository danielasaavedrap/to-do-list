import React from "react";
import "./todoitems.css";
import checkfalse from "../../imagenes/checkfalse.png";
import checktrue from "../../imagenes/checktrue.png";
import trashfalse from "../../imagenes/trashfalse.png";
import trashtrue from "../../imagenes/trashtrue.png";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem-active"}`}>
      <img
        className="Icon"
        src={!props.completed ? checkfalse : checktrue}
        alt="icono"
      />
      <div className="textToDo">
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <img
          className="Icon Icon-delete"
          src={!props.completed ? trashfalse : trashtrue}
          alt="icono"
        />
      </div>
    </li>
  );
}

export { TodoItem };
