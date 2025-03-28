import { Todo } from '../App';

interface Props {
  todo: Todo;
  onToggleDone: (id: string) => void;
}

const TodoItem = ({ todo, onToggleDone }: Props) => {
  return (
    <div>
      <p className={todo.done ? 'line-through' : ''}>{todo.title}</p>
      <input
        type='checkbox'
        checked={todo.done}
        onChange={() => onToggleDone(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
