import { Todo } from '../App';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <p className=''>{todo.title}</p>
      <input type='checkbox' />
    </div>
  );
};

export default TodoItem;
