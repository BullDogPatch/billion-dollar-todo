import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: crypto.randomUUID(), title: 'Do washing', done: false },
  ]);

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
