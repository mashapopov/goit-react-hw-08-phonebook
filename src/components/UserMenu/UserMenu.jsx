import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Div, P, Button } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <P>Welcome, {user.name}</P>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <ImExit size={18} />
      </Button>
    </Div>
  );
};
