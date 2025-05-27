import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
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
  const [locationStatus, setLocationStatus] = useState('loading'); // loading | granted | denied
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationStatus('denied');
        return;
      }
      setLocationStatus('granted');

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  useEffect(() => {
    if (location && doctor.location && mapRef.current) {
      mapRef.current.fitToCoordinates(
        
        [
          { latitude: location.latitude, longitude: location.longitude },
          { latitude: doctor.location.latitude, longitude: doctor.location.longitude },
        ],
        {
          edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
          animated: true,
        }
      );
    }
  }, [location, doctor.location]);

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

  if (locationStatus === 'loading') {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando ubicación...</Text>
      </View>
    );
  }

  if (locationStatus === 'denied') {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>No se concedieron permisos para acceder a la ubicación.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          ref={mapRef}
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
