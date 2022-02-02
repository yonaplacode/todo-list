type TTodo = {
  id: number,
  text: string,
  completed: boolean
}

type TContextApp = {
  totalTodos: number,
  completedTodos: number,
  filterValue: string,
  setFilterValue: (string) => void,
  filterTodos: TTodo[],
  addTodo: (string) => void,
  completeTodo: (string) => void,
  deleteTodo: (string) => void
  open: boolean,
  setOpen: (boolean) => void
}