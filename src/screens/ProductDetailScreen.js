import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/ProductDetailStyles';
import { addOrder } from '../Services/orderService';
import { getCurrentUser } from '../Services/userService';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

    <TouchableOpacity
      style={styles.addButton}
      onPress={async () => {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        await addOrder({
          name: product.name,
          quantity,
          unitPrice: parseFloat(product.price.replace('$', '')),
          imageUrl: product.imageUrl,
          userId: currentUser.id,
        });

        alert(`${quantity} ${product.name} agregado al carrito`);
      }}
    >
      <Text style={styles.addButtonText}>Agregar {quantity} al carrito</Text>
    </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
