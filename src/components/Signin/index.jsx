import { useForm } from 'react-hook-form';
import { Form, Input } from './styledComponents';
import { Button } from '@material-ui/core';
import Loading from '../Loading/index.jsx';
import { connect } from 'react-redux';
import { userLogin } from '../../utils/redux/thunks';

const Signin = ({ setOpen, getUser, isLoading }) => {
  const { register, handleSubmit, reset } = useForm();

  console.log(isLoading);

  const onSubmit = async (data) => {
    let newUser;
    try {
      newUser = getUser(data);
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

const mapStateToProps = (state) => ({
  isLoading: state.User.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
