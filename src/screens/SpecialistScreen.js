import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/GeneralDocStyles';

const specialists = [
  {
    id: 1,
    name: 'Dr. Paola Gonzáles',
    phone: '4491112233',
    email: 'paola.gonz@gmail.com',
    price: '$600',
    image: require('../../assets/specialist1.jpg'),
  },
  {
    id: 2,
    name: 'Dr. Eduardo Martínez',
    phone: '4499988776',
    email: 'edu.mtz@gmail.com',
    price: '$580',
    image: require('../../assets/specialist2.jpeg'),
  },
  {
    id: 3,
    name: 'Dra. Karla Núñez',
    phone: '4493344556',
    email: 'karla.nunez@gmail.com',
    price: '$620',
    image: require('../../assets/specialist3.jpeg'),
  },
];

const SpecialistDoctorScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {specialists.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.card}
            onPress={() => navigation.navigate('ConfirmVisit')}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.details}>Phone: {doctor.phone}</Text>
              <Text style={styles.details}>Email: {doctor.email}</Text>
              <Text style={styles.price}>{doctor.price}</Text>
            </View>
            <Image source={doctor.image} style={styles.image} />
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
