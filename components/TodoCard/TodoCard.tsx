import React from 'react'
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { CompleteTodoButton } from '../CompleteTodoButton/CompleteTodoButton'

const TodoCard = ({text, completed, onComplete, onDelete}:{text:string, completed:boolean, onComplete: any, onDelete: any}) => {

  return (
    <div>
      <div className="flex place-items-center w-fit py-4 px-2 bg-emerald-100 shadow-lg rounded-r-lg my-2 mx-6">
        <div className='flex flex-col'>
          <CompleteTodoButton onClick={onComplete}/>
          <DeleteTodoButton onClick={onDelete}/>
        </div>
        {
          completed ?
            <span
              className="mx-2 text-gray-600 font-medium font-shadows text-2xl line-through"
            >
              { text }
            </span>
          :
          <span
            className="mx-2 text-gray-600 font-medium font-shadows text-2xl"
          >
            { text }
          </span>
        }
        
      </div>
    </div>
  );
};

export { TodoCard }
