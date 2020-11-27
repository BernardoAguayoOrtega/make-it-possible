import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Input } from './styledComponents';
import { Button } from '@material-ui/core';
import Loading from '../Loading/index.jsx';
import { connect } from 'react-redux';
import { setUserFromDataBase } from '../../utils/redux/thunks';

const SignUp = ({ setOpen, getUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    let newUser;
    try {
      newUser = await getUser(data);
      setLoading(false);
      reset();
      await setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loading type="bars" color="black" />
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

const mapDispatchToProps = (dispatch) => ({
  getUser: (data) => dispatch(setUserFromDataBase(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
