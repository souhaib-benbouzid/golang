import { Link } from 'react-router-dom';
import { LOCATION } from '../contants';

type Props = {};

export const Home = (props: Props) => {
  return (
    <main data-testid='home-content'>
      <h1>Todo App</h1>
      <p>
        <Link to={LOCATION.login}>Login</Link> Or{' '}
        <Link to={LOCATION.registration}>Create an Account</Link> to start
      </p>
    </main>
  );
};

export default Home;
