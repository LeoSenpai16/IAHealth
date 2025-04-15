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

const doctors = [
  {
    id: 1,
    name: 'Alfredo Lopez Sandoval',
    phone: '4491633605',
    email: 'alf.ls@gmail.com',
    price: '$400',
    image: require('../../assets/doctor1.jpg'),
  },
  {
    id: 2,
    name: 'Alfredo Lopez Sandoval',
    phone: '4491633605',
    email: 'alf.ls@gmail.com',
    price: '$400',
    image: require('../../assets/doctor2.jpg'),
  },
  {
    id: 3,
    name: 'Estefania Rodriguez Ponce',
    phone: '4491237687',
    email: 'estef.rp@gmail.com',
    price: '$460',
    image: require('../../assets/doctor3.jpg'),
  },
];

const GeneralDoctorScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {doctors.map((doctor) => (
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

export default GeneralDoctorScreen;

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
