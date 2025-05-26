import { collection, addDoc,deleteDoc,doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { getCurrentUser } from './userService'; // 👈 importa tu userService

export const createAppointment = async (appointmentData) => {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) throw new Error('Usuario no autenticado');

    await addDoc(collection(db, 'appointments'), {
      ...appointmentData,
      userId: currentUser.id, // 👈 asocia cita al usuario
    });
    return true;
  } catch (error) {
    console.error('Error al guardar la cita: ', error);
    throw error;
  }
};

export const getAppointments = async () => {
  const appointmentsRef = collection(db, 'appointments');
  const q = query(appointmentsRef);
  const querySnapshot = await getDocs(q);

  const appointments = [];
  querySnapshot.forEach(doc => {
    appointments.push({ id: doc.id, ...doc.data() });
  });

  return appointments;
};

export const deleteAppointment = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, 'appointments', appointmentId));
    console.log("Cita eliminada con éxito");
  } catch (error) {
    console.error("Error eliminando cita: ", error);
    throw error;
  }
};