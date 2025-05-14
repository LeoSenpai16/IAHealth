import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Variable para almacenar el usuario autenticado
let currentUser = null;

export const validarUsuario = async (email, password) => {
  const usuariosRef = collection(db, 'users');
  const q = query(usuariosRef, where('email', '==', email), where('password', '==', password));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    currentUser = { id: userDoc.id, ...userDoc.data() }; // Almacena el usuario
    return currentUser;
  } else {
    return null;
  }
};

export const updateCurrentUser = (nuevosDatos) => {
  if (!currentUser) {
    return;
  }
  currentUser = { ...currentUser, ...nuevosDatos };
};


// Nueva función para obtener el usuario actual
export const getCurrentUser = () => currentUser;