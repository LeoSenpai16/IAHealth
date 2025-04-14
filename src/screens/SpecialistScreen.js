import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const specialists = [
  {
    id: 1,
    name: 'Dr. Paola González',
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
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {specialists.map((doctor) => (
          <View key={doctor.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.details}>Phone: {doctor.phone}</Text>
              <Text style={styles.details}>Email: {doctor.email}</Text>
              <Text style={styles.price}>{doctor.price}</Text>
            </View>
            <Image source={doctor.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SpecialistDoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  details: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 15,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  sosButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 10,
    elevation: 5,
  },
  sosText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
