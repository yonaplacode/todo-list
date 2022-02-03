import React, { useState } from 'react';
import { useAppContext } from '../AppContext/AppContext';

const ModalCreateTodo = () => {
  const { addTodo, setOpen } = useAppContext()
  const [todoValue, setTodoValue] = useState('')

  const onChange = (event) => {
    setTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpen(false)
  }

  const onSubmit = () => {
    event.preventDefault()
    addTodo(todoValue)
    setOpen(false)
  }

  return (
    <div className='bg-slate-600 bg-opacity-40 fixed -top-10 -left-10 -right-10 -bottom-10 flex justify-center items-center'>
      <form
        onSubmit={onSubmit}
        className='w-3/4 h-3/4 bg-white px-4 py-20 flex content-center flex-col rounded-3xl'
      >
        <label
          className='text-center font-bold text-5xl mb-12 font-shadows'
        >
          <span>New &nbsp;</span>
          <span className='text-primary'>ToDo</span>
        </label>
        <textarea
          placeholder='What you have to do?'
          value={todoValue}
          onChange={onChange}
          className='bg-slate-300 border-solid border-2 rounded-lg shadow-md shadow-black text-2xl items-center h-96 w-auto placeholder:text-slate-600 placeholder: focus:outline-primary'
        >
        </textarea>
        <div className='mt-14 flex justify-around
         items-center w-500'>
          <button
            onClick={onCancel}
            type='button'
            className='inline-block text-3xl text-black text-bold w-120'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='inline-block text-3xl text-white text-bold w-180 p-2 bg-primary
            rounded-lg'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export { ModalCreateTodo }