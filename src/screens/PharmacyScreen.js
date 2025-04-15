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
