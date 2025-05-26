import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getGeneralDoctors = async () => {
  const doctorsRef = collection(db, 'generalDoctors');
  const snapshot = await getDocs(doctorsRef);

  const doctors = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return doctors;
};

export const getSpecialistDoctors = async () => {
  const specialistsRef = collection(db, 'EspecialistDoctor');
  const snapshot = await getDocs(specialistsRef);

  const specialists = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return specialists;
};