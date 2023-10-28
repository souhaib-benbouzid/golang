import { MouseEventHandler } from 'react';

type Props = {
  label: string;
  name: string;
  onClick: MouseEventHandler<HTMLInputElement>;
  value: string;
};

const CheckBox = ({ name, label, onClick, value }: Props) => {
  return (
    <div data-testid='textbox'>
      <label htmlFor={name}>{label}</label>
      <input
        type={'checkbox'}
        id={name}
        value={value}
        name={name}
        onClick={onClick}
      />
    </div>
  );
};

export default CheckBox;
