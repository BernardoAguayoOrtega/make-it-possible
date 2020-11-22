import { GET_USER } from './actions';

const initialState = { user: null };

export const User = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER: {
      const { user } = payload;

      return { ...state, user };
    }

    default:
      return state;
  }
};
