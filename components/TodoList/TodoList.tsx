import React from 'react'

const TodoList = ({ children }:{children: any}) => {
  return (
    <section className="flex flex-row flex-wrap">
      {children}
    </section>
  );
};

export { TodoList }
