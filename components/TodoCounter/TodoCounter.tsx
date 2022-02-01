import React from 'react'
import { useAppContext } from '../AppContext/AppContext';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useAppContext()
  return (
    <div className='m-8'>
      <span className='text-6xl text-primary font-shadows font-extrabold'>
        You complete
        <span
          className='text-white'
        >
          &nbsp;{ completedTodos }&nbsp;
        </span>
        of the
        <span
          className='text-white'
        >
          &nbsp;{ totalTodos }&nbsp;
        </span>
        tasks
      </span>;
    </div>
  );
}

export { TodoCounter }
