import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';

test('should render Not Found page', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  const content = screen.getByTestId('notfound-container');
  expect(content).toBeInTheDocument();
});
