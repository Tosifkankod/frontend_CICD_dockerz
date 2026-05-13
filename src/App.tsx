import { useEffect, useState } from "react";
import TodoList from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import axios from "axios";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const API = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    await axios.post(API, {
      title,
      completed: false,
    });

    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (todo: Todo) => {
    await axios.put(`${API}/${todo._id}`, {
      completed: !todo.completed,
    });

    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          MERN CRUD App
        </h1>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;