import React, { useState } from 'react';
import TodoList from "./TodoList";
import { v4 } from 'uuid';

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setTodoInput] = useState('');

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(prevTodos => [...prevTodos, ...storedTodos]);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTODO(e) {
    if (!input) return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: v4(), name: input, complete: false}]
    });
  }

  function handleClearTODOs() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  function handleInput(e) {
    const newInput = e.target.value;
    setTodoInput(newInput);
    console.log(input);
  }

  function test() {
    setTodoInput('test');
  }
  
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input onInput={handleInput} value={input} type="text" />
      <button onClick={test}>Add test</button>
      <button onClick={handleAddTODO}>Add TODO</button>
      <button onClick={handleClearTODOs}>Clear Completed TODOs</button>
      <div style={{width: '200px'}}>{todos.filter(todo => !todo.complete).length} left to do</div>
      {todos.length > 5 && <h1>more than 5</h1>}
    </>
  );
}

export default App;
