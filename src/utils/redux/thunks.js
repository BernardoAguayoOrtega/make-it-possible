/**
 * thunks to handle side effects inside our components
 */
import { signup, login, logout } from '../firebase/auth';
import { getUser, userLogoutFromApp } from './actions';

export const getUserFromDataBase = (data) => async (dispatch) => {
  try {
    const user = await signup(data);

    dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    const user = await login(data);

    await dispatch(getUser(user));
  } catch (error) {
    alert(error);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    const user = await logout();

    await dispatch(userLogoutFromApp(user));
  } catch (error) {
    alert(error);
  }
};
