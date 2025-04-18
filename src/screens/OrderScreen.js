import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styles/OrderSyles';

const orders = [
  {
    id: 1,
    name: 'Paracetamol',
    quantity: 2,
    unitPrice: 50,
    image: require('../../assets/paracetamol.png'),
  },
  {
    id: 2,
    name: 'Ibuprofeno',
    quantity: 1,
    unitPrice: 65,
    image: require('../../assets/ibuprofeno.png'),
  },
  {
    id: 3,
    name: 'Loratadina',
    quantity: 3,
    unitPrice: 80,
    image: require('../../assets/loratadina.png'),
  },
];

export default function OrderScreen() {
  const total = orders.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{order.name}</Text>
              <Text style={styles.details}>Quantity: {order.quantity}</Text>
              <Text style={styles.totalUnit}>
                ${order.quantity * order.unitPrice}
              </Text>
            </View>
            <Image source={order.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Contenedor fijo abajo */}
      <View style={styles.bottomBar}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

