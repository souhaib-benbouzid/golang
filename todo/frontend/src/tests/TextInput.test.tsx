import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '../components/form/TextInput';

test('should render a text input', () => {
  const onChange = jest.fn();
  const props = {
    label: 'label',
    name: 'name',
    onChange: onChange,
    type: 'text',
    value: 'souhaib',
  };

  render(<TextInput {...props} />);
  const label = screen.getByText('label');
  const input = screen.getByRole('textbox');
  const control = screen.getByTestId('text-input');

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(control).toBeInTheDocument();
});

test('should handle text input value change', () => {
  const onChange = jest.fn();
  const props = {
    label: 'label',
    name: 'name',
    onChange: onChange,
    type: 'text',
    value: 'souhaib',
  };

  render(<TextInput {...props} />);

  const input = screen.getByDisplayValue('souhaib');

  userEvent.type(input, 'updated text');

  expect(onChange).toBeCalled();
});
