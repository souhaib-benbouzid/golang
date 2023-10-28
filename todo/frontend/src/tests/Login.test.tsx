import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';

test('should render Login page', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const title = screen.getByText('Login');
  expect(title).toBeInTheDocument();
});

test('should render login form', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const form = screen.getByTestId('login-form');
  expect(form).toBeInTheDocument();
});
