/**
 * thunks to handle side effects inside our components
 */
import { signup, login, logout } from '../firebase/auth';
import { getUser, userLogoutFromApp } from './actions';

let user;

export const setUserFromDataBase = (data) => async (dispatch) => {
  try {
    user = await signup(data);

    dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }

  return user;
};

export const userLogin = (data) => async (dispatch) => {
  try {
    user = await login(data);

    await dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }

  return user;
};

export const userLogout = () => async (dispatch) => {
  try {
    const user = await logout();

    await dispatch(userLogoutFromApp(user));
  } catch (error) {
    alert(error);
  }
};
