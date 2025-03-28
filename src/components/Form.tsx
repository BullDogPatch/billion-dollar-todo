import { useState } from 'react';
import { Todo } from '../App';

const Form = ({ onAddTodo }: { onAddTodo: (newTodo: Todo) => void }) => {
  const [todoText, setTodoText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText) return;
    const newTodo = { id: crypto.randomUUID(), title: todoText, done: false };
    onAddTodo(newTodo);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoText}
        type='text'
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default Form;
