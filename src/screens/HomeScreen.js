import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import styles from '../Styles/HomeSyles';
import { analizarSintomas } from '../Services/aiService';
import { getCurrentUser } from '../Services/userService';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const scrollViewRef = useRef();  // 🟢 ref para el ScrollView

  useEffect(() => {
    const usuario = getCurrentUser();
    const nombreUsuario = usuario ? usuario.name : 'usuario';

    const mensajeBienvenida = {
      tipo: 'bot',
      texto: `${nombreUsuario}, hola. ¿En qué puedo ayudarte hoy? ¿Tienes algún síntoma o consulta médica que deseas evaluar?`
    };

    setMensajes([mensajeBienvenida]);
  }, []);

  // Scroll automático al final cuando se actualicen los mensajes
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [mensajes]);

  const enviarSintomas = async () => {
    if (mensaje.trim() === '') return;

    const nuevoMensajeUsuario = { tipo: 'user', texto: mensaje };
    setMensajes((prev) => [...prev, nuevoMensajeUsuario]);

    setCargando(true);

    try {
      const resultado = await analizarSintomas(mensaje);
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.chatContainer}
          ref={scrollViewRef}
        >
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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu mensaje..."
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
