import React, {useState} from "react";

function Todo({ task = "default todo", id="1", remove}){
    const handleDelete = () => remove(id);

    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    );

    return jsx;
}

export default Todo;
