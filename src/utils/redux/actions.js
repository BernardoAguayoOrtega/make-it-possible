export const GET_USER = 'GET_USER';
export const getUser = (user) => ({
  type: GET_USER,
  payload: { user },
});

export const USER_LOGOUT_FROM_APP = 'USER_LOGOUT_FROM_APP';
export const userLogoutFromApp = (user) => ({
  type: USER_LOGOUT_FROM_APP,
  payload: { user },
});
