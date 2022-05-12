import React from "react";
import "./todoButton.css";

function CreateTodoButtom(props){
const onClickButton = (mensaje) => {
    alert(mensaje);
}

    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton("aqui va el nodal")}
        >
        +
        </button>
    );
}

export { CreateTodoButtom};