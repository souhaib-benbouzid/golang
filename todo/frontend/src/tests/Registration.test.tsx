import { render, screen } from '@testing-library/react';
import Registration from '../pages/Registration';

test('should render registration page', () => {
  render(<Registration />);
  const title = screen.getByText('Registration');
  expect(title).toBeInTheDocument();
});

test('should render registration form', () => {
  render(<Registration />);
  const form = screen.getByTestId('registration-form');
  expect(form).toBeInTheDocument();
});
