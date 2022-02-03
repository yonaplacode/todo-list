import React from 'react'
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { CompleteTodoButton } from '../CompleteTodoButton/CompleteTodoButton'

const TodoCard = ({text, completed, onComplete, onDelete}:{text:string, completed:boolean, onComplete: any, onDelete: any}) => {

  return (
    <div>
      <div className="flex place-items-center w-fit py-4 px-2 bg-amber-100 shadow-lg rounded-r-lg my-2 mx-6">
        <div className='flex flex-col'>
          <CompleteTodoButton completed={completed} onClick={onComplete}/>
          <DeleteTodoButton onClick={onDelete}/>
        </div>
          <span
            className={`${completed ? 'text-gray-400 line-through' : 'text-black'} mx-2 font-bold font-shadows text-2xl`}
          >
            { text }
          </span>
      </div>
    </div>
  );
};

export { TodoCard }
