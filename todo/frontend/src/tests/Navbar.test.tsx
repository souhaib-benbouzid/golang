import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('should render navbar', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
