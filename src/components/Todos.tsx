import { Todo } from '../App';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
}

const Todos = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
