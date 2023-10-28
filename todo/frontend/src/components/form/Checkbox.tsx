import { ChangeEventHandler } from 'react';

type Props = {
  label?: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const CheckBox = ({ name, label, onChange, checked }: Props) => {
  return (
    <div data-testid='textbox'>
      <label htmlFor={name}>{label}</label>
      <input
        type={'checkbox'}
        id={name}
        checked={checked}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;
