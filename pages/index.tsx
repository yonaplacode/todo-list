import React, { useState } from 'react'
import { App } from '../components/App/App';


// const useLocalStorage = (itemName, initialValue) => {
//   let localStorageItem
//   //REVISAR
//   if (typeof window !== 'undefined') {
//     localStorageItem = localStorage.getItem(itemName)
//   }

//   let parsedItem
//   if (!localStorageItem) {
//     //REVISAR
//     if (typeof window !== 'undefined') {
//       localStorage.setItem(itemName,JSON.stringify(initialValue))
//       parsedItem = initialValue
//     } else {
//       try {
//         parsedItem = JSON.parse(localStorageItem)
//       } catch (err) {
//         console.log('Error: ', err.message);
//       }
//     }
//   }

//   const [item, setItem] = useState(parsedItem)
//   const updateItem = (newItem) => {
//     setItem(newItem)
//     const stringItem = JSON.stringify(newItem)
//     localStorage.setItem(itemName, stringItem)
//   }

//   return [
//     item,
//     updateItem,
//   ]
// }

const HomePage = () => {
  //const [todos, updateTodos] = useLocalStorage('TODOS_V1',[])

  let localStorageTodos
  if (typeof window !== 'undefined') {
    localStorageTodos = localStorage.getItem('TODOS_V1')
  }

  let parsedTodos
  if (!localStorageTodos && typeof window !== 'undefined') {
    localStorage.setItem('TODOS_V1',JSON.stringify([]))
    parsedTodos = []
  } else {
    try{
      parsedTodos = JSON.parse(localStorageTodos)
    } catch(errror) {
          console.error("Not a JSON response")
    }
  }

  const [todos, setTodos] = useState(parsedTodos)

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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
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
