import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Styles/OrderSyles';
import { getOrders, deleteOrder } from '../Services/orderService';
import { getCurrentUser } from '../Services/userService';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';


export default function OrderScreen() {
  const [orders, setOrders] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const fetchOrders = async () => {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        const pedidos = await getOrders(currentUser.id);
        setOrders(pedidos);
      };

      fetchOrders();
    }, [])
  );

  useEffect(() => {
    const fetchOrders = async () => {
      const currentUser = getCurrentUser();
      if (!currentUser) return;

      const pedidos = await getOrders(currentUser.id);
      setOrders(pedidos);
    };

    fetchOrders();
  }, []);

  const total = orders.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  const handleDelete = async (id) => {
    await deleteOrder(id);
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{order.name}</Text>
              <Text style={styles.details}>Cantidad: {order.quantity}</Text>
              <Text style={styles.details}>Subtotal: ${order.quantity * order.unitPrice}</Text>
            </View>
            <Image source={{ uri: order.imageUrl }} style={styles.image} />
            <TouchableOpacity onPress={() => handleDelete(order.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
