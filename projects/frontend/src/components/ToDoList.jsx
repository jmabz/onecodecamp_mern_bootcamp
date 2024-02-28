import React, {useState} from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
    // The Map data structure exposes concise ways to access and manipulate data.
    const [todos, setToDos] = useState(new Map());
    const [inputValue, setInputValue] = useState('');
    const [toDoToEdit, setToDoToEdit] = useState(null);

    const addToDo = () => {
        const uuid = crypto.randomUUID();
        setToDos(todos.set(uuid, {
            id: uuid,
            task: inputValue
        }));

        setInputValue('');
    };

    
    const getToDo = (id) => {
        if (!todos.has(id)) {
            return;
        }

        setToDoToEdit(id);
        setInputValue(todos.get(id).task);
    };

    const updateToDo = (id) => {
        if (!todos.has(id)) {
            return;
        }

        const selectedToDo = todos.get(id);
        selectedToDo.task = inputValue;
        todos.set(id, selectedToDo);
        setToDos(todos);
        setToDoToEdit(null);
        setInputValue('');
    };

    const deleteToDo = (id) => {
        if (!todos.has(id)) {
            return;
        }

        todos.delete(id);
        // Post-activity: Found out that this helps in re-rendering the Map object properly
        setToDos(todos => new Map([...todos.entries()]));
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={toDoToEdit === null ? addToDo : (event) => updateToDo(toDoToEdit)}>{toDoToEdit === null ? "Add" : "Edit"} Task</button>
            <ul>
                {Array.from(todos.values()).map((todo) => (
                    // Added isInEdit post-activity as an experiment
                    <ToDoItem key={todo.id} todo={todo} isInEdit={toDoToEdit !== null} handlers={{
                        deleteToDo: deleteToDo,
                        getToDo: getToDo
                    }} />
                ))}
            </ul>
        </div>
        
    );
}

export default ToDoList;