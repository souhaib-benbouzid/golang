import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LOCATION } from '../contants';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className='bg-slate-300 h-screen'>
      <Navbar />
      <div
        data-testid='home-content'
        className='flex flex-col justify-center items-center '
      >
        <h1 className='text-black font-medium text-5xl mb-12 mt-12'>
          Todo App
        </h1>
        <p>Start Here 👇</p>
        <p>
          <Link to={LOCATION.login} className='text-blue-700'>
            Login
          </Link>{' '}
          Or{' '}
          <Link to={LOCATION.registration} className='text-blue-700'>
            Create an Account
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Home;
