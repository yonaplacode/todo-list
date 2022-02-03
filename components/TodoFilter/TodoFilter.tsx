import React from 'react'
import { useAppContext } from '../AppContext/AppContext';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

const TodoFilter = () => {
  const { filterValue, setFilterValue, setOpen } = useAppContext()

  const onFilterValueChange = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <div className='mb-8 flex flex-row'>
      <input
        className="relative pl-8 w-56 h-12 rounded-full bg-white placeholder-gray-400 border-2 focus:outline-primary "
        placeholder='Filter your tasks'
        onChange={onFilterValueChange}
        value={filterValue}
      />
      <CreateTodoButton setOpen={setOpen}/>
    </div>
  );
};

export { TodoFilter }
