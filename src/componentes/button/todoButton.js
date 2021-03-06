import React from "react";
import "./todoButton.css";

function CreateTodoButton(props){
const onClickButton = () => {
    props.setOpenModal(!props.openModal);
}

    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton()}
        >
        +
        </button>
    );
}

export { CreateTodoButton};