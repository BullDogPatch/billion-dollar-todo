import { useState } from 'react';

interface Todo {
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

  return (
    <>
      <div>
        {todos.map((todo) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
