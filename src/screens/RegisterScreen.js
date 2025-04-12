// screens/RegisterScreen.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/avatar-placeholder.png')}
        style={styles.avatar}
      />
      <Text style={styles.selectText}>Select an image</Text>

      {/* Campos de registro */}
      {[
        { icon: 'person-outline', placeholder: 'Name' },
        { icon: 'person-circle-outline', placeholder: 'Lastname' },
        { icon: 'mail-outline', placeholder: 'Email' },
        { icon: 'call-outline', placeholder: 'Phone Number' },
        { icon: 'lock-closed-outline', placeholder: 'Password', secure: true },
        { icon: 'lock-closed-outline', placeholder: 'Confirm Password', secure: true },
      ].map((field, i) => (
        <View style={styles.inputContainer} key={i}>
          <Ionicons name={field.icon} size={20} color="#00BCD4" />
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            secureTextEntry={field.secure || false}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
}

// Estilos...
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3f7fa',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  selectText: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    height: 45,
    elevation: 3,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#00BCD4',
    fontWeight: '600',
  },
});
