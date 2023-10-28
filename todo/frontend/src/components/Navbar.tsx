import { NavLink, useLocation } from 'react-router-dom';
import { LOCATION } from '../contants';

const navLinks = {
  [LOCATION.home]: [
    {
      to: LOCATION.login,
      label: 'Login',
    },
    {
      to: LOCATION.registration,
      label: 'Registration',
    },
  ],
  [LOCATION.login]: [
    {
      to: LOCATION.home,
      label: 'Home',
    },
    {
      to: LOCATION.registration,
      label: 'Registration',
    },
  ],
  [LOCATION.registration]: [
    {
      to: LOCATION.home,
      label: 'Home',
    },
    {
      to: LOCATION.login,
      label: 'Login',
    },
  ],
};

const Navbar = () => {
  const location = useLocation();

  return (
    <div data-testid='navbar' className='w-full'>
      <ul className='list-none mr-0 p-2 flex justify-center'>
        {navLinks[location.pathname] &&
          navLinks[location.pathname].map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className='m-2 text-lg font-bold'>
                {item.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
