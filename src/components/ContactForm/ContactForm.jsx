import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
  const loginInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!contacts) return;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is alredy in contacts`);
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={loginInputId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={loginInputId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>{' '}
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
