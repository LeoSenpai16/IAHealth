import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const actualizarPerfil = async (userId, nuevosDatos) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, nuevosDatos);
    return true;
  } catch (error) {
    console.error("Error actualizando perfil:", error);
    return false;
  }
};