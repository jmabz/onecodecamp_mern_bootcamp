import React from 'react'

const ToDoItem = ({ selectedToDo, toDo, handleSelectToDo, deleteToDo, changeStatus }) => {
  return (
    <li
      className={`todo-list__item${selectedToDo?.id === toDo.id ? ' todo-list__item--in-edit' : ''}`} >
      <input type="checkbox"
        name="status"
        id={`status_${toDo.id}`}
        className="todo-list__item__status"
        checked={toDo.isDone}
        onChange={() => changeStatus(toDo.id)}
      />

      <label htmlFor={`status_${toDo.id}`}
        className={`todo-list__item__task${toDo.isDone ? ' todo-list__item__task--done' : ''}`}>{toDo.task}</label>

      <div className="todo-list__item__hover-options">
        {
          (selectedToDo?.id === toDo.id) ?
            <a href="#" className="todo-list__item-cancel-edit" onClick={() => handleSelectToDo(null)}>Cancel Editing</a> :
            (
              <>
                <a href="#" className="todo-list__item-edit" onClick={() => handleSelectToDo(toDo)}>Edit</a>
                <a href="#" className="todo-list__item-delete" onClick={() => deleteToDo(toDo.id)}>Delete</a>
              </>
            )
        }
      </div>
    </li>
  )
}

export default ToDoItem