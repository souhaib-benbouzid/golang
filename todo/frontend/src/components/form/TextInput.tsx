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
    <div data-testid='text-input' className='mt-2 mb-2 flex flex-col'>
      <label htmlFor={name} className='mb-1 text-md capitalize'>
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className='rounded p-2 '
      />
    </div>
  );
};

export default TextInput;
