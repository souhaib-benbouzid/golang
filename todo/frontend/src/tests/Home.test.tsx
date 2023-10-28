import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

test('should render home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const title = screen.getByText('Todo App');
  expect(title).toBeInTheDocument();
});
