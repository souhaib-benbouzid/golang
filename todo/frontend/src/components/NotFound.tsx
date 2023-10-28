import { Link } from 'react-router-dom';
import { LOCATION } from '../contants';

type Props = {};

export const NotFound = (props: Props) => {
  return (
    <div data-testid='notfound-container'>
      <h1>Oops!</h1>
      <p>
        Page Not Found | go back <Link to={LOCATION.home}>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
