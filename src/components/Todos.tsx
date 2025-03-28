import { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onToggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Todos = ({ todos, onToggleDone, deleteTodo }: Props) => {
  const sortedTodos = [...todos].sort((a, b) => +a.done - +b.done);
  return (
    <div className='flex flex-col justify-center items-center'>
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
