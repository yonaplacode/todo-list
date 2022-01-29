import React from 'react'

const CreateTodoButton = () => {
  return (
    <button
      className="flex flex-row justify-center items-center relative rounded-full ml-4 w-12 h-12 bg-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="white"
        stroke="white"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export { CreateTodoButton }
