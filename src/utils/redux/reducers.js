import { GET_USER, USER_LOGOUT_FROM_APP } from './actions';

const initialState = { user: null };

export const User = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER: {
      const { user } = payload;

      return { ...state, user };
    }

    case USER_LOGOUT_FROM_APP: {
      const { user } = payload;

      return { ...state, user };
    }

    default:
      return state;
  }
};
