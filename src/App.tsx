import React, { useState } from 'react';
import Todos from './components/Todos';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const initialState: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Do washing',
    done: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'Take the dog to the vets',
    done: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'fetch some shopping',
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [todoText, setTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText) return;
    const newTodo = { id: crypto.randomUUID(), title: todoText, done: false };
    addTodo(newTodo);
    setTodoText('');
  };

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
      <form onSubmit={handleSubmit}>
        <input
          value={todoText}
          type='text'
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <Todos todos={todos} onToggleDone={handleToggleDone} />
    </>
  );
}

export default App;
