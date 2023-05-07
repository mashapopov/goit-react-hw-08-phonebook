import { useAuth } from 'hooks';
import { Nav } from './Navigation.styled';
import Link from 'components/Link/Link';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
