import { useForm } from 'react-hook-form';
import { Form, Input } from './styledComponents';
import { Button } from '@material-ui/core';
import Loading from '../Loading/index.jsx';
import { connect } from 'react-redux';
import { userLogin } from '../../utils/redux/thunks';
import { useState } from 'react';

const Signin = ({ setOpen, getUser }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await getUser(data);
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
  getUser: (data) => dispatch(userLogin(data)),
});

export default connect(null, mapDispatchToProps)(Signin);
