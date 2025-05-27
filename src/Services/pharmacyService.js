import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getMedicines = async () => {
  const querySnapshot = await getDocs(collection(db, 'medicines'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
