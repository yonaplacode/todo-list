import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

const TodoFilter = ({ filterValue, setFilterValue }) => {
  const onFilterValueChange = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <div className='ml-8 mb-8 flex flex-row'>
      <input
        className="relative pl-8 w-56 h-12 rounded-full bg-white placeholder-gray-400 border-2 focus:outline-primary "
        placeholder='Filter your tasks'
        onChange={onFilterValueChange}
        value={filterValue}
      />
      <CreateTodoButton />
    </div>
  );
};

export { TodoFilter }
