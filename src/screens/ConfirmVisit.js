import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useRoute } from '@react-navigation/native';
import { confirmVisitStyles as styles } from '../Styles/doctorStyles';
import { createAppointment } from '../Services/appointmentService';
import { getCurrentUser } from '../Services/userService';

export default function ConfirmVisitScreen() {
  const route = useRoute();
  const { doctor } = route.params;

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const handleConfirmVisit = async () => {
    try {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        alert('Usuario no autenticado');
        return;
      }

      await createAppointment({
        userId: currentUser.id,
        doctorName: doctor.name,
        phone: doctor.phone,
        email: doctor.email,
        imageUrl: doctor.imageUrl,
        price: doctor.price,
        date: new Date().toISOString(),
        location: doctor.location,
      });
      alert('Cita confirmada ✅');
    } catch (error) {
      console.error('Error al confirmar la cita:', error);
      alert('Error al confirmar la cita');
    }
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Tú estás aquí"
            pinColor="blue"
          />
          <Marker
            coordinate={{
              latitude: doctor.location.latitude,
              longitude: doctor.location.longitude,
            }}
            title={doctor.name}
            description={`Tel: ${doctor.phone}`}
            pinColor="red"
          />
        </MapView>
      )}

      <View style={styles.card}>
        <Image source={{ uri: doctor.imageUrl }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.type}>Doctor</Text>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.info}>Phone: {doctor.phone}</Text>
          <Text style={styles.info}>Email: {doctor.email}</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.label}>Visit Price</Text>
          <Text style={styles.value}>{doctor.price}</Text>
          <Text style={[styles.label, { marginTop: 10 }]}>Transfer Fee</Text>
          <Text style={styles.value}>$82</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.total}>
            $
            {parseInt(doctor.price.replace('$', '')) + 82}
          </Text>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmVisit}
          >
            <Text style={styles.confirmText}>Confirm Visit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
