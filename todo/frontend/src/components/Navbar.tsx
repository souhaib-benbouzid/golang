import { NavLink } from 'react-router-dom';
import { LOCATION } from '../contants';

const array = [
  {
    to: LOCATION.home,
    label: 'Home',
  },
  {
    to: LOCATION.login,
    label: 'Login',
  },
  {
    to: LOCATION.registration,
    label: 'Registration',
  },
];

const Navbar = () => {
  return (
    <div data-testid='navbar' className='w-full'>
      <ul className='list-none mr-0 p-2 flex justify-center'>
        {array.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className='m-2'>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
