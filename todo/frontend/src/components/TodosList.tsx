import { Todo } from '../types/todos';
import TodoItem from './TodoItem';

type Props = {
  data: Todo[];
};

const TodosList = ({ data }: Props) => {
  const renderTodos = () => {
    if (data.length === 0) {
      return <div>No todos found, Create a new todo</div>;
    }

    return data.map((item) => {
      return <TodoItem key={item.id} {...item} />;
    });
  };

  return (
    <div data-testid='todos-list' className='flex flex-col'>
      {renderTodos()}
    </div>
  );
};

export default TodosList;
