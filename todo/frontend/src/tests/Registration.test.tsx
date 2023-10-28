import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Registration from '../pages/Registration';

test('should render registration page', () => {
  render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>
  );
  const title = screen.getByText('Registration');
  expect(title).toBeInTheDocument();
});

test('should render registration form', () => {
  render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>
  );
  const form = screen.getByTestId('registration-form');
  expect(form).toBeInTheDocument();
});
