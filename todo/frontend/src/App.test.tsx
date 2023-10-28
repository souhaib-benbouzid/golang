import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo app title', () => {
  render(<App />);
  const title = screen.getByText(/Todo App/i);
  expect(title).toBeInTheDocument();
});
