import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../Styles/UpdateProfileStyles';
import { getCurrentUser, updateCurrentUser } from '../Services/userService';
import { actualizarPerfil } from '../Services/ProfileService';

export default function UpdateProfileScreen({ navigation }) {
  const user = getCurrentUser();

  // Estado para los campos editables
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const handleUpdate = async () => {
    Alert.alert(
          'Confirmar cambios',
          '¿Deseas guardar las modificaciones?',
          [
            {
              text: 'Cancelar',
              style: 'cancel'
            },
            {
              text: 'Guardar',
              onPress: async () => {
            try {
            const resultado = await actualizarPerfil(user.id, formData);
            if (!resultado) {
              throw new Error("Error actualizando perfil en Firestore");
            }

            updateCurrentUser(formData);
            navigation.goBack();
          } catch (error) {

            Alert.alert('Error', 'No se pudieron guardar los cambios');
          }
              }
            }
          ]
        );
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/avatar-placeholder.png')}
        style={styles.avatar}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre completo</Text>
        <TextInput 
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput 
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de teléfono</Text>
        <TextInput 
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => setFormData({...formData, phone: text})}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección para envío</Text>
        <TextInput 
          style={styles.input}
          value={formData.address}
          onChangeText={(text) => setFormData({...formData, address: text})}
        />
      </View>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Subir cartilla</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdate} 
      >
        
        <Text style={styles.updateText}>Actualizar perfil</Text>
        
      </TouchableOpacity >
    </ScrollView>
  );
}

