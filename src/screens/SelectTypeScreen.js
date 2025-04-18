import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/SelectTypeStyles';


export default function SelectTypeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Select a type of Doctor</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('GeneralDoctor')}
        >
          <Text style={styles.cardText}>General Doctor</Text>
          <Image
            source={require('../../assets/general-doctor.png')}
            style={styles.cardImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Specialist')}
        >
          <Text style={styles.cardText}>Specialist</Text>
          <Image
            source={require('../../assets/specialist.jpg')}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.sosButton}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}
