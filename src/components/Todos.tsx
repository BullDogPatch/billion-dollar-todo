import { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  onToggleDone: (id: string) => void;
}

const Todos = ({ todos, onToggleDone }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleDone={onToggleDone} />
      ))}
    </div>
  );
};

export default Todos;
