import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

type Props = {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  type?: HTMLInputTypeAttribute;
};

const TextInput = ({ name, label, type = 'text', onChange, value }: Props) => {
  return (
    <div data-testid='text-input'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
