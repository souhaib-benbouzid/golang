import { render, screen } from '@testing-library/react';
import TodosList from '../components/TodosList';
import { Todo } from '../types/todos';

const todos: Todo[] = [
  {
    id: '1',
    todo: 'Do something nice for someone I care about',
    completed: true,
  },
  {
    id: '2',
    todo: 'Memorize the fifty states and their capitals',
    completed: false,
  },
  {
    id: '3',
    todo: 'Watch a classic movie',
    completed: false,
  },
  {
    id: '4',
    todo: 'Contribute code or a monetary donation to an open-source software project',
    completed: false,
  },
  {
    id: '5',
    todo: "Solve a Rubik's cube",
    completed: false,
  },
];

test('should render multiple todos', () => {
  render(<TodosList data={todos} />);

  expect(screen.getAllByTestId('todo-item').length).toEqual(todos.length);
});

test('should render handle empty todos', () => {
  render(<TodosList data={[]} />);

  expect(
    screen.getByText('No todos found, Create a new todo')
  ).toBeInTheDocument();
});
