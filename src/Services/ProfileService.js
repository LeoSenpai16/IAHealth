import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const obtenerPerfilUsuario = async (userId) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obteniendo perfil:", error);
    return null;
  }
};  