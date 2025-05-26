import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from '../Styles/DateStyles';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Services/firebaseConfig';
import { getCurrentUser } from '../Services/userService';
import { Ionicons } from '@expo/vector-icons';
import { deleteAppointment } from '../Services/appointmentService';

export default function DateBookScreen() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const querySnapshot = await getDocs(collection(db, 'appointments'));
    const citas = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(cita => cita.userId === currentUser.id);

    setAppointments(citas);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDeleteAppointment = (appointmentId) => {
    Alert.alert(
      "Eliminar cita",
      "¿Seguro que quieres eliminar esta cita?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            await deleteAppointment(appointmentId);
            fetchAppointments(); // recarga las citas
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/calendar-icon.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Mis Citas</Text>

      {appointments.length === 0 ? (
        <Text style={styles.subtitle}>No tienes citas registradas aún</Text>
      ) : (
        appointments.map(cita => (
          <View key={cita.id} style={styles.card}>
            <Image source={{ uri: cita.imageUrl }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.name}>{cita.doctorName}</Text>
                <TouchableOpacity onPress={() => handleDeleteAppointment(cita.id)}>
                  <Ionicons name="trash-outline" size={22} color="red" />
                </TouchableOpacity>
              </View>
              <Text style={styles.info}>Phone: {cita.phone}</Text>
              <Text style={styles.info}>Email: {cita.email}</Text>
              <Text style={styles.info}>Price: {cita.price}</Text>
              <Text style={styles.info}>Date: {new Date(cita.date).toLocaleString()}</Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}
