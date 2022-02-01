import React, { createContext, ReactNode, useContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TContextAppDefaultValues: TContextApp = {
  totalTodos: 0,
  completedTodos: 0,
  filterValue: '',
  setFilterValue: () => {},
  filterTodos: [],
  completeTodo: () => {},
  deleteTodo: () => {},
};
const AppContext = createContext<TContextApp>(TContextAppDefaultValues)

const useAppContext = () => {
  return useContext(AppContext)
}

const AppContextProvider = ({children}:{children: ReactNode}) => {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[])

  const [filterValue, setFilterValue] = useState('')

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

  const value ={
    totalTodos,
    completedTodos,
    filterValue,
    setFilterValue,
    filterTodos,
    completeTodo,
    deleteTodo,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider, useAppContext }
