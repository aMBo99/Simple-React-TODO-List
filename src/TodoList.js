import React from 'react';
import TODO from './TODO';

export default function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
        return <TODO key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
