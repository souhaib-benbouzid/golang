import Navbar from '../components/Navbar';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <div className='bg-slate-300 h-screen'>
      <Navbar />
      <main
        data-testid='registration-content'
        className='flex flex-col justify-center items-center mb-12 mt-12'
      >
        <h1 className='text-5xl font-medium'>Registration</h1>
        <RegistrationForm />
      </main>
    </div>
  );
};

export default Registration;
