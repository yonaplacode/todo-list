import React from 'react';

const CompleteTodoButton = ({onClick}) => {
  return (
    <button
      className="flex flex-row justify-center items-center rounded-full -ml-6 -mt-6 w-8 h-8 bg-white outline-primary border-solid border-2 border-primary active:scale-75"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#39B54A"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>
  );
};

export { CompleteTodoButton }
