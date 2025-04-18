import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { confirmVisitStyles as styles } from '../Styles/doctorStyles';

const doctor = {
  id: 1,
  name: 'Alfredo Lopez Sandoval',
  type: 'General Doctor',
  phone: '4491633605',
  email: 'alf.ls@gmail.com',
  latitude: 21.88234,
  longitude: -102.29156,
  avatar: 'https://i.pravatar.cc/101',
};

export default function ConfirmVisitScreen() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

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
            coordinate={{ latitude: doctor.latitude, longitude: doctor.longitude }}
            title={doctor.name}
            description={doctor.type}
            pinColor="red"
          />
        </MapView>
      )}

      {/* Tarjeta visible siempre */}
      <View style={styles.card}>
        <Image source={{ uri: doctor.avatar }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.type}>{doctor.type}</Text>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.info}>Phone: {doctor.phone}</Text>
          <Text style={styles.info}>Email: {doctor.email}</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.label}>Visit Price</Text>
          <Text style={styles.value}>$400</Text>
          <Text style={[styles.label, { marginTop: 10 }]}>Transfer Fee</Text>
          <Text style={styles.value}>$82</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.total}>$482</Text>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Visit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

