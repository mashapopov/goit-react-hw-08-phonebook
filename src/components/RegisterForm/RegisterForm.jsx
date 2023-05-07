import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Adrian Cross"
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          placeholder="examplepwd12345"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          minLength="7"
          placeholder="Adrian Cross"
        />
      </Label>

      <button type="submit">Register</button>
    </Form>
  );
};
