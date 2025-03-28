import { useEffect, useState } from 'react';
import Todos from './components/Todos';
import Form from './components/Form';
import Header from './components/Header';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? (JSON.parse(storedTodos) as Todo[]) : [];
  });

  const doneTodos = todos.filter((todo) => todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (item: Todo) => {
    setTodos((prev) => [item, ...prev]);
  };

  const handleToggleDone = (id: string) => {
    setTodos((prevItems) =>
      prevItems.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className='h-[100vh]  mx-auto'>
      <Header />
      <Form onAddTodo={addTodo} />
      {todos.length > 0 && (
        <p className='text-center'>
          You have {doneTodos} tasks marked as done.
        </p>
      )}
      <Todos
        todos={todos}
        onToggleDone={handleToggleDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
