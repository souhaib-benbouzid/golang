import { ChangeEvent, useState } from 'react';
import Button from './Button';
import TextInput from './form/TextInput';

type Props = {};

const LoginForm = (props: Props) => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form data-testid='login-form' className='w-3/12' onSubmit={handleSubmit}>
      <TextInput
        type='email'
        label='email'
        name='email'
        value={data.email}
        onChange={handleChange}
      />
      <TextInput
        type='password'
        label='password'
        name='password'
        value={data.password}
        onChange={handleChange}
      />
      <div className='mt-6 m-auto'>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
