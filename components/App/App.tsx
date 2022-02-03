import React from 'react';
import { useAppContext } from '../AppContext/AppContext';
import ClientOnlyPortal from '../ClientOnlyPortal/ClientOnlyPortal';
import { ModalCreateTodo } from '../ModalCreateTodo/ModalCreateTodo';
import { TodoCard } from '../TodoCard/TodoCard';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { TodoList } from '../TodoList/TodoList';

const App = () => {
  const { filterTodos, completeTodo, deleteTodo, open } = useAppContext()

  return (
    <div className="w-screen h-screen relative bg-[url('https://www.streaver.com/images/bg.jpg')] bg-cover">

      <div className='w-screen h-screen absolute top-0 left-0 bg-black opacity-60'/>
      <div className='absolute top-2 left-2'>

        <span className='text-2xl font-seymourOne font-extrabold font-seymour text-white'>
          ToDoLIST
        </span>
        <span className='text-4xl font-seymourOne font-extrabold font-seymour text-primary'>
          .
        </span>

        <div className='flex flex-col place-items-center'>
          <TodoCounter />
          <TodoFilter />
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
      {
        open && (
          <ClientOnlyPortal selector="#modal">
            <ModalCreateTodo />
          </ClientOnlyPortal>
        )
      }
    </div>
  );
};

export { App }
