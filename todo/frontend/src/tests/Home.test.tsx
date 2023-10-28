import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('should render home page', () => {
  render(<Home />);
  const title = screen.getByText('Todo App');
  expect(title).toBeInTheDocument();
});
