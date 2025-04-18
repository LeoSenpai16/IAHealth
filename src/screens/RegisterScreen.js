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
import styles from '../Styles/RegisterSyles';


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


