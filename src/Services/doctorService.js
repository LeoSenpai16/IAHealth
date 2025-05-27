import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const getGeneralDoctors = async () => {
  const doctorsRef = collection(db, 'generalDoctors');
  const snapshot = await getDocs(doctorsRef);

  const doctors = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      location: {
        latitude: data.location.latitude || data.location._lat,
        longitude: data.location.longitude || data.location._long,
      },
    };
  });

  return doctors;
};

export const getSpecialistDoctors = async () => {
  const specialistsRef = collection(db, 'EspecialistDoctor');
  const snapshot = await getDocs(specialistsRef);

  const specialists = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      location: {
        latitude: data.location.latitude || data.location._lat,
        longitude: data.location.longitude || data.location._long,
      },
    };
  });

  return specialists;
};
