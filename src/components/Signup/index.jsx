import { useForm } from 'react-hook-form';
import { signup } from '../../utils/firebase/auth';
import { useState } from 'react';
import { Form, Input } from './styledComponents';

const SignUp = ({ setOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      newUser = await signup(data);
      reset();
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={register}
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={register}
      />
      <Input type="email" name="email" placeholder="Email" ref={register} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <button type="submit">Sign Up</button>
    </Form>
  );
};

export default SignUp;
