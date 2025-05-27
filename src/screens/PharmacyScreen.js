import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/PharmacySyles';
import { getMedicines } from '../Services/pharmacyService';

const PharmacyScreen = () => {
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      const meds = await getMedicines();
      setMedicines(meds);
    };

    fetchMedicines();
  }, []);

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
            <Image
              source={{ uri: med.imageUrl }}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PharmacyScreen;
