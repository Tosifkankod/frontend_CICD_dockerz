interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (todo: Todo) => void;
}

const TodoList = ({ todos, onDelete, onToggle }: Props) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="flex items-center justify-between border p-3 rounded"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo)}
            />

            <p
              className={todo.completed ? "line-through text-gray-400" : ""}
            >
              {todo.title}
            </p>
          </div>

          <button
            onClick={() => onDelete(todo._id)}
            className="bg-red-800 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;