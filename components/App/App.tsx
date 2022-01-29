import React from 'react';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoList } from '../TodoList/TodoList';

/* 
const lostodos = [
  {id: 1, text: "Planificar", completed: false},
  {id: 2, text: "Limpiar", completed: false},
  {id: 3, text: "Organizar", completed: false},
  {id: 4, text: "Cocinar", completed: false}
]
localStorage.setItem('TODOS_V1',JSON.stringify(lostodos))
localStorage.getItem('TODOS_V1')
*/

const App = ({
  totalTodos,
  completedTodos,
  filterValue,
  setFilterValue,
  filterTodos,
  completeTodo,
  deleteTodo
}) => {
  return (
    <div className="w-full h-screen relative bg-[url('https://www.streaver.com/images/bg.jpg')] bg-cover">

    <div className='w-full h-full absolute top-0 left-0 bg-black opacity-60'/>
      <div className='absolute top-2 left-2'>
        <span className='text-4xl font-seymourOne font-extrabold font-seymour text-white'>ToDoLIST </span>
        <span className='text-6xl font-seymourOne font-extrabold font-seymour text-primary'>.</span>

        <div className='flex flex-col place-items-center'>
          <TodoCounter
            total={totalTodos}
            completed={completedTodos}
          />
          <TodoFilter
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </div>

        <TodoList>
          {
            filterTodos && filterTodos.map(
              ({id, text, completed }:{id:number, text:string, completed: boolean}) => {
                return (
                  <TodoCard
                    key={id}
                    text={text}
                    completed={completed}
                    onComplete={() => completeTodo(text)}
                    onDelete={() => deleteTodo(text)}
                  />
                );
              })
          }
        </TodoList>
      </div>
    </div>
  );
};

export { App }
