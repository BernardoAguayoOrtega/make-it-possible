import firebase from 'firebase/app';
import 'firebase/auth';

export const signup = async ({ firstName, lastName, email, password }) => {
  console.log(email, password);
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const user = resp.user;

  await user.updateProfile({ displayName: `${firstName} ${lastName}` });

  return user;
};