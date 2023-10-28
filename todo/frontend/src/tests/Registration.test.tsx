import { render, screen } from '@testing-library/react';
import Registration from '../pages/Registration';

test('should render registration page', () => {
  render(<Registration />);
  const title = screen.getByText('Registration');
  expect(title).toBeInTheDocument();
});
