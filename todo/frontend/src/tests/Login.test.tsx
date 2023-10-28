import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('should render Login page', () => {
  render(<Login />);
  const title = screen.getByText('Login');
  expect(title).toBeInTheDocument();
});
