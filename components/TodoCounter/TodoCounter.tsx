import React from 'react'
import { useAppContext } from '../AppContext/AppContext';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useAppContext()
  return (
    <div className='m-8'>
      { totalTodos ?
        <h1 className='text-6xl text-primary font-shadows font-extrabold text-center'>
          You complete
          <span className='text-white'> { completedTodos } </span>
          of the
          <span className='text-white'> { totalTodos } </span>
          tasks
        </h1>
      :
        <h1 className='text-6xl text-primary font-shadows font-extrabold text-center '>
          Hi! 
          <span className='text-white'> Write down </span>
          and 
          <span className='text-white'> do it</span>
          !
        </h1>
      }
    </div>
  );
}

export { TodoCounter }
