import { useState } from 'react';
import { Todo } from '../types/todos';

const TodoItem = ({ completed, id, todo }: Todo) => {
  const [isCompleted, setisCompleted] = useState<boolean>(completed);

  return (
    <div
      data-testid='todo-item'
      className={`${
        isCompleted ? 'bg-green-600 line-through' : 'bg-yellow-300'
      } w-full mt-2 mb-2 p-2 cursor-pointer`}
      onClick={() => setisCompleted(!isCompleted)}
      id={id}
    >
      {todo}
    </div>
  );
};

export default TodoItem;
