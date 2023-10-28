import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: Props) => {
  return (
    <button {...props} className='bg-teal-600 text-white p-2 rounded w-full'>
      {props.children}
    </button>
  );
};

export default Button;
