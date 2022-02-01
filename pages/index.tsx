import React, { useState } from 'react'
import { App } from '../components/App/App';
import { useLocalStorage } from '../hooks/useLocalStorage';

const HomePage = () => {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[])

  const [filterValue, setFilterValue] = useState('')
  //EL ARREGLO CON LOS &&
  const completedTodos = todos && todos.filter(todo => !!todo.completed).length
  const totalTodos = todos && todos.length

  let filterTodos = [];
  if (!filterValue.length) {
    filterTodos = todos
  } else {
    filterTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const todoFilter = filterValue.toLowerCase()
      return todoText.includes(todoFilter)
    })
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <App
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      filterValue={filterValue}
      setFilterValue={setFilterValue}
      filterTodos={filterTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default HomePage
