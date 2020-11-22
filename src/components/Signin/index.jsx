import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Input } from './styledComponents';
import { Button } from '@material-ui/core';
import Loading from '../Loading/index.jsx';
import { connect } from 'react-redux';
import { getUserFromDataBase } from '../../utils/redux/thunks';

const Signin = ({ setOpen, getUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      newUser = getUser(data);
      reset();
      setLoading(false);
      setOpen(false);
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
          <Input type="email" name="email" placeholder="Email" ref={register} />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          <Button type="submit" variant="outlined">
            Sign In
          </Button>
        </>
      )}
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (data) => dispatch(getUserFromDataBase(data)),
});

export default connect(null, mapDispatchToProps)(Signin);
