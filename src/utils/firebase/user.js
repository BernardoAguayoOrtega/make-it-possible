/**
 * logic to create new users documents inside firestore
 */
import { firestore } from './firebase';

export const createUserDocument = async (user) => {
  const docRef = firestore.doc(`/users/${user.uid}`);

  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
  };

  return docRef.set(userProfile);
};
