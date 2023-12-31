import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckBox from '../components/form/Checkbox';

test('should render a checkbox', () => {
  const props = {
    name: 'acceptAgreement',
    label: 'accept agreement',
    onChange: jest.fn(),
    checked: false,
  };

  render(<CheckBox {...props} />);

  expect(screen.getByText('accept agreement')).toBeInTheDocument();
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test('should call onChange', () => {
  const props = {
    name: 'acceptAgreement',
    label: 'accept agreement',
    onChange: jest.fn(),
    checked: false,
  };

  render(<CheckBox {...props} />);
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);

  expect(props.onChange).toBeCalled();
});
