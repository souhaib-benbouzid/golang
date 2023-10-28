import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div className='bg-slate-300 h-screen'>
      <Navbar />
      <main
        data-testid='login-content'
        className='flex flex-col justify-center items-center mb-12 mt-12'
      >
        <h1 className='text-5xl font-medium'>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
