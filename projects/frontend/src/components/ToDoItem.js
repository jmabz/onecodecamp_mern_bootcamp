import React from 'react';

function ToDoItem(props) {
    const {todo, isInEdit, handlers} = props;
    return (
        <li>
            <div>
                <p>{todo.task}</p>
                <button onClick={(event) => handlers.getToDo(todo.id)}>Edit</button>
                {!isInEdit ? <button onClick={(event) => handlers.deleteToDo(todo.id)}>Delete</button> : ''}
            </div>
        </li>
    );
}

export default ToDoItem;