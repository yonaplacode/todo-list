import React from 'react'

const TodoCounter = ({ total, completed }) => {
  return (
    <div className='m-8'>
      <span className='text-6xl text-primary font-shadows font-extrabold'>
        You complete
        <span
          className='text-white'
        >
          &nbsp;{ completed }&nbsp;
        </span>
        of the
        <span
          className='text-white'
        >
          &nbsp;{ total }&nbsp;
        </span>
        tasks
      </span>;
    </div>
  );
}

export { TodoCounter }
