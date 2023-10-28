import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckBox from '../components/form/Checkbox';

test('should render a checkbox', () => {
  const props = {
    name: 'acceptAgreement',
    label: 'accept agreement',
    onClick: jest.fn(),
    value: 'agreement',
  };

  render(<CheckBox {...props} />);

  expect(screen.getByText('accept agreement')).toBeInTheDocument();
  expect(screen.getByDisplayValue('agreement')).not.toBeChecked();
});

test('should call onClick', () => {
  const props = {
    name: 'acceptAgreement',
    label: 'accept agreement',
    onClick: jest.fn(),
    value: 'agreement',
  };

  render(<CheckBox {...props} />);
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);

  expect(props.onClick).toBeCalled();
});
