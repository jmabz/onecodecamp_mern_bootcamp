import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [task, setTask] = useState('');
  const [selectedToDo, setSelectedToDo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedToDo !== null) {
      editToDo(selectedToDo.id);
      return;
    }

    addToDo(task);
  }

  const handleSelectToDo = (toDo) => {
    setSelectedToDo(toDo);
    setTask(toDo?.task || '');
  }

  const addToDo = (task) => {
    if (task === '') {
      return;
    }

    setToDos([...toDos, { id: crypto.randomUUID(), task: task, isDone: false }]);
    setTask('');
  }

  const editToDo = (id) => {
    const targetIndex = toDos.findIndex(toDo => toDo.id === id);

    if (targetIndex === -1 || task === '') {
      return;
    }

    const updatedToDos = toDos.map((toDo, index) => {
      if (index !== targetIndex) {
        return toDo;
      }

      toDo.task = task;
      return toDo;
    });

    setToDos(updatedToDos);
    setSelectedToDo(null);
    setTask('');
  }

  const changeStatus = (id) => {
    const targetIndex = toDos.findIndex(toDo => toDo.id === id);

    if (targetIndex === -1) {
      return;
    }

    const updatedToDos = toDos.map((toDo, index) => {
      if (index !== targetIndex) {
        return toDo;
      }

      toDo.isDone = !toDo.isDone;
      return toDo;
    });

    setToDos(updatedToDos);
  }

  const deleteToDo = (id) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  return (
    <>
      <div id="todo-form-container">
        <form id="todo-form" onSubmit={handleSubmit}>
          <label htmlFor="todo-form__task-text">{selectedToDo !== null ? "Edit a task" : "Add a task"}</label>
          <br />
          <input type="text"
          name="task-text" id="todo-form__task-text" value={task} placeholder={selectedToDo !== null ? selectedToDo.task : "What do you want to do?"}
          onChange={(event) => setTask(event.target.value)}
          />
          <br />
          <span id="todo-form__instruction">Press Enter to submit</span>
        </form>
      </div>
      <div id="todo-list-container">
        <ul id="todo-list">
          {toDos.map((toDo) => (
            <ToDoItem key={toDo.id} selectedToDo={selectedToDo} toDo={toDo} handleSelectToDo={handleSelectToDo} deleteToDo={deleteToDo} changeStatus={changeStatus}/>
          ))}
        </ul>
      </div>
    </>
  )
};

export default ToDoList;