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
  Platform,
  Linking 
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
  const scrollViewRef = useRef();

  useEffect(() => {
    const usuario = getCurrentUser();
    const nombreUsuario = usuario ? usuario.name : 'usuario';

    const mensajeBienvenida = {
      tipo: 'bot',
      texto: `${nombreUsuario}, hola. ¿En qué puedo ayudarte hoy? ¿Tienes algún síntoma o consulta médica que deseas evaluar?`,
      botones: null,
    };

    setMensajes([mensajeBienvenida]);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [mensajes]);

  const manejarBoton = (tipo) => {
    switch (tipo) {
      case 'cita':
        navigation.navigate('SelectType'); // O la pantalla que uses para citas
        break;
      case 'medicina':
        navigation.navigate('Pharmacy');  // O la pantalla para comprar medicinas
        break;
      case 'urgencias':
        Linking.openURL('tel:911');
        break;
    }
  };

  const enviarSintomas = async () => {
    if (mensaje.trim() === '') return;

    const nuevoMensajeUsuario = { tipo: 'user', texto: mensaje };
    setMensajes((prev) => [...prev, nuevoMensajeUsuario]);

    setCargando(true);

    try {
      const resultado = await analizarSintomas(mensaje);

      // Aquí detectamos si el resultado tiene la palabra clave para mostrar botones (o siempre los mostramos)
      const nuevoMensajeBot = {
        tipo: 'bot',
        texto: resultado,
        botones: [
          { id: 'cita', texto: 'Hacer cita con doctor' },
          { id: 'medicina', texto: 'Comprar medicina' },
          { id: 'urgencias', texto: 'Urgencias' },
        ],
      };

      setMensajes((prev) => [...prev, nuevoMensajeBot]);
    } catch (error) {
      const errorMensaje = {
        tipo: 'bot',
        texto: 'Ocurrió un error al consultar la IA.',
        botones: null,
      };
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
        <ScrollView contentContainerStyle={styles.chatContainer} ref={scrollViewRef}>
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

                {/* Si el mensaje es del bot y tiene botones, los mostramos */}
                {msg.tipo === 'bot' && msg.botones && (
                  <View style={styles.buttonRow}>
                    {msg.botones.map((boton) => (
                      <TouchableOpacity
                        key={boton.id}
                        style={
                          boton.id === 'cita'
                            ? styles.doctorButton
                            : boton.id === 'medicina'
                            ? styles.pharmacyButton
                            : [styles.pharmacyButton, { backgroundColor: 'orange' }]
                        }
                        onPress={() => manejarBoton(boton.id)}
                      >
                        <Text style={styles.buttonText}>{boton.texto}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
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
            multiline
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