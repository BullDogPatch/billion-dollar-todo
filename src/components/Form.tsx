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
    <form onSubmit={handleSubmit} className='flex justify-center'>
      <input
        className='rounded-md bg-gray-600 p-2'
        value={todoText}
        type='text'
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        type='submit'
        className='bg-gray-800 rounded-md px-3 cursor-pointer hover:bg-gray-950'
      >
        Add
      </button>
    </form>
  );
};

export default Form;
