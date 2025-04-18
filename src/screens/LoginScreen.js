// screens/LoginScreen.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/LoginSyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} // Usa tu logo o imagen principal
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#00BCD4" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#00BCD4" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
