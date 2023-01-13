interface Todo {
  id: number;
  title: String;
  status: StatusProgress;
  completedOn?: Date;
}

enum StatusProgress {
  Done = "done",
  InProgress = "in-progress",
  todo = "todo",
}

var todoItems: Todo[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: StatusProgress.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: StatusProgress.InProgress },
  {
    id: 3,
    title: "Write the best app in the world",
    status: StatusProgress.todo,
  },
];

function addTodoItem(todo:String) :Todo{
  const id = getNextId(todoItems);

  const newTodo : Todo = {
    id,
    title: todo,
    status: StatusProgress.todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends {id:number}>(items:T[]) :number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1; 
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
