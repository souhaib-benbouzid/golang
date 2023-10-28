import { ChangeEvent, useState } from 'react';
import TextInput from './form/TextInput';

type Props = {};

const RegistrationForm = (props: Props) => {
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
    <form data-testid='registration-form' onSubmit={handleSubmit}>
      <TextInput
        label='full Name'
        name='name'
        value={data.name}
        onChange={handleChange}
      />
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
      <button type='submit'>submit</button>
    </form>
  );
};

export default RegistrationForm;
