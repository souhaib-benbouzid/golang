import RegistrationForm from '../components/RegistrationForm';

type Props = {};

const Registration = (props: Props) => {
  return (
    <div data-testid='registration-content'>
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
