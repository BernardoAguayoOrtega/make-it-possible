import { useForm } from 'react-hook-form';
import { signup } from '../../utils/firebase/auth';
import { useState } from 'react';
import { Form, Input } from './styledComponents';
import { Button } from '@material-ui/core';
import Loading from '../Loading/index.jsx';

const SignUp = ({ setOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      setLoading(false);
      setOpen(false);
      newUser = await signup(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </>
      )}
    </Form>
  );
};

export default SignUp;
