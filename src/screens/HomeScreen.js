import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native"; 
import styles from '../Styles/HomeSyles';
import { analizarSintomas } from '../Services/aiService';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);  // historial de mensajes
  const [cargando, setCargando] = useState(false);

  const enviarSintomas = async () => {
    if (mensaje.trim() === '') return;

    // Agregar mensaje del usuario al historial
    const nuevoMensajeUsuario = { tipo: 'user', texto: mensaje };
    setMensajes((prev) => [...prev, nuevoMensajeUsuario]);

    setCargando(true);

    try {
      const resultado = await analizarSintomas(mensaje);

      // Agregar respuesta de la IA al historial
      const nuevoMensajeBot = { tipo: 'bot', texto: resultado };
      setMensajes((prev) => [...prev, nuevoMensajeBot]);
    } catch (error) {
      const errorMensaje = { tipo: 'bot', texto: 'Ocurrió un error al consultar la IA.' };
      setMensajes((prev) => [...prev, errorMensaje]);
    }

    setMensaje('');
    setCargando(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Chat */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {mensajes.map((msg, index) => (
          <View
            key={index}
            style={msg.tipo === 'bot' ? styles.botMessage : styles.userMessage}
          >
            {msg.tipo === 'bot' && (
              <Image source={require('../../assets/ia-icon.png')} style={styles.avatar} />
            )}
            <View style={msg.tipo === 'bot' ? styles.messageBubbleBot : styles.messageBubbleUser}>
              <Text style={styles.messageText}>{msg.texto}</Text>
            </View>
            {msg.tipo === 'user' && (
              <Image source={require('../../assets/user-avatar.png')} style={styles.avatar} />
            )}
          </View>
        ))}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#555"
          value={mensaje}
          onChangeText={setMensaje}
          onSubmitEditing={enviarSintomas}
        />
        {cargando ? (
          <ActivityIndicator size="small" color="#00BCD4" style={{ marginLeft: 10 }} />
        ) : (
          <TouchableOpacity onPress={enviarSintomas}>
            <Image source={require('../../assets/ia-icon.png')} style={styles.sendIcon} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
