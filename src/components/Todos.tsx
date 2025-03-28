import { Todo } from '../App';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'motion/react';

interface Props {
  todos: Todo[];
  onToggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Todos = ({ todos, onToggleDone, deleteTodo }: Props) => {
  const sortedTodos = [...todos].sort((a, b) => +a.done - +b.done);
  return (
    <div className='flex flex-col justify-center items-center'>
      <AnimatePresence>
        {todos.length > 0 ? (
          sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleDone={onToggleDone}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p>You have no tasks yet</p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
