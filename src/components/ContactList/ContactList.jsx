import { Ul, Li, Div, P, Span, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/filter/selectors';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import { AiFillDelete } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

export const ContactList = () => {
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const Loading = useSelector(selectLoading);

  if (!contacts) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Li key={id}>
            <Div>
              <BsTelephone />
              <P>{name}:</P>
            </Div>
            <Span>{number}</Span>
            <Button
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
              disabled={Loading}
            >
              <AiFillDelete size={20} />
            </Button>
          </Li>
        ))}
      </Ul>
    </>
  );
};
