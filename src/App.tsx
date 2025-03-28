import { useEffect, useState } from 'react';
import Todos from './components/Todos';
import Form from './components/Form';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');

    try {
      return storedTodos ? (JSON.parse(storedTodos) as Todo[]) : [];
    } catch (error) {
      console.error('Error parsing todos from localStorage', error);
      return [];
    }
  });

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

  return (
    <>
      <h1>Tick of your daily tasks</h1>
      <Form onAddTodo={addTodo} />
      <Todos todos={todos} onToggleDone={handleToggleDone} />
    </>
  );
}

export default App;
