import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/GeneralDocStyles';
import { getSpecialistDoctors  } from '../Services/doctorService';

const SpecialistDoctorScreen = () => {
  const navigation = useNavigation();
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      const data = await getSpecialistDoctors();
      setSpecialists(data);
    };

    fetchSpecialists();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {specialists.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.card}
            onPress={() => navigation.navigate('ConfirmVisit', { doctor })}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.details}>Phone: {doctor.phone}</Text>
              <Text style={styles.details}>Email: {doctor.email}</Text>
              <Text style={styles.price}>{doctor.price}</Text>
            </View>
            <Image source={{ uri: doctor.imageUrl }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpecialistDoctorScreen;
