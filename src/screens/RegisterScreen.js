import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/RegisterSyles';
import { registrarUsuario } from '../Services/userService';

export default function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '', // añadimos address para que se vaya completo
  });

  const handleRegister = async () => {
    // Validaciones básicas
    if (Object.values(formData).some(value => value === '')) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      await registrarUsuario(formData);
      Alert.alert('Éxito', 'Usuario registrado correctamente');
      navigation.navigate('Login');
    } catch (error) {
      console.error("Error registrando usuario: ", error);
      Alert.alert('Error', 'No se pudo registrar el usuario');
    }
  };

return (
    <View style={{ flex: 1, backgroundColor: '#e3f7fa' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20 }}>
        <Image source={require('../../assets/avatar-placeholder.png')} style={styles.avatar} />
        <Text style={styles.selectText}>Select an image</Text>

        {[  // Campos
          { icon: 'person-outline', placeholder: 'Name', field: 'name' },
          { icon: 'mail-outline', placeholder: 'Email', field: 'email' },
          { icon: 'call-outline', placeholder: 'Phone Number', field: 'phone' },
          { icon: 'home-outline', placeholder: 'Address', field: 'address' },
          { icon: 'lock-closed-outline', placeholder: 'Password', field: 'password', secure: true },
        ].map((field, i) => (
          <View style={styles.inputContainer} key={i}>
            <Ionicons name={field.icon} size={20} color="#00BCD4" />
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              secureTextEntry={field.secure || false}
              value={formData[field.field]}
              onChangeText={text => setFormData({ ...formData, [field.field]: text })}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}
