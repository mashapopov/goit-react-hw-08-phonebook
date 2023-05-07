import Link from 'components/Link/Link';
import { Div } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Div>
  );
};
