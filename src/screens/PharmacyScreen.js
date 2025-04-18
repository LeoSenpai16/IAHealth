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
import styles from '../Styles/PharmacySyles';


const medicines = [
  {
    id: 1,
    name: 'Paracetamol',
    description: 'Pain reliever and fever reducer',
    price: '$50',
    image: require('../../assets/paracetamol.png'),
  },
  {
    id: 2,
    name: 'Ibuprofeno',
    description: 'Anti-inflammatory for pain relief',
    price: '$65',
    image: require('../../assets/ibuprofeno.png'),
  },
  {
    id: 3,
    name: 'Loratadina',
    description: 'Allergy relief',
    price: '$80',
    image: require('../../assets/loratadina.png'),
  },
];

const PharmacyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {medicines.map((med) => (
          <TouchableOpacity
            key={med.id}
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetail', { product: med })}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{med.name}</Text>
              <Text style={styles.details}>{med.description}</Text>
              <Text style={styles.price}>{med.price}</Text>
            </View>
            <Image source={med.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyScreen;
