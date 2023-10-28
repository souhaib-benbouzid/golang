import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

test('should render dashboard', () => {
  render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>
  );

  expect(screen.getByTestId('dashboard-content')).toBeInTheDocument();
  expect(screen.getByTestId('todos-list')).toBeInTheDocument();
  expect(
    screen.getByText('No todos found, Create a new todo')
  ).toBeInTheDocument();
});
