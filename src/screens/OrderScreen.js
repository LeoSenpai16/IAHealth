import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
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
  totalUnit: {
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'column',
  },
  totalLabel: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
