import { signup } from '../firebase/auth';
import { getUser } from './actions';

export const getUserFromDataBase = (data) => async (dispatch) => {
  try {
    const user = await signup(data);

    dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }
};
