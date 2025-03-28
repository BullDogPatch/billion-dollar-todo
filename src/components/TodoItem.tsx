import { Todo } from '../App';
import { motion } from 'motion/react';

interface Props {
  todo: Todo;
  onToggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, onToggleDone, deleteTodo }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -400, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 200, scale: 1.2 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className='bg-gray-500 flex w-[300px] md:w-[500px] border border-amber-300 m-4 p-6 rounded-md justify-between items-center'
    >
      <p
        className={
          todo.done
            ? 'line-through text-gray-800 text-2xl'
            : 'text-gray-800 text-2xl'
        }
      >
        {todo.title}
      </p>
      <div className='items-center p-2'>
        <input
          type='checkbox'
          checked={todo.done}
          onChange={() => onToggleDone(todo.id)}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <button
          className='text-red-600 font-bold text-2xl cursor-pointer p-0'
          onClick={() => deleteTodo(todo.id)}
        >
          &times;
        </button>
      </div>
    </motion.div>
  );
};

export default TodoItem;
