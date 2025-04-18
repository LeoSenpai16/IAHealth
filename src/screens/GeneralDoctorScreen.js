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
