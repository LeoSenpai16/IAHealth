import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Chat */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Mensajes de ejemplo */}
        <View style={styles.botMessage}>
          <Image source={require('../../assets/ia-icon.png')} style={styles.avatar} />
          <View style={styles.messageBubbleBot}>
            <Text style={styles.messageText}>Hi Rodolfo, What do you need?</Text>
          </View>
        </View>

        <View style={styles.userMessage}>
          <View style={styles.messageBubbleUser}>
            <Text style={styles.messageText}>I feel sick in the head</Text>
          </View>
          <Image source={require('../../assets/user-avatar.png')} style={styles.avatar} />
        </View>

        <View style={styles.botMessage}>
          <Image source={require('../../assets/ia-icon.png')} style={styles.avatar} />
          <View style={styles.messageBubbleBot}>
            <Text style={styles.messageText}>
              Do you have a headache, dizziness, pressure in your head or is it more of an emotional thing?
            </Text>
          </View>
        </View>

        <View style={styles.userMessage}>
          <View style={styles.messageBubbleUser}>
            <Text style={styles.messageText}>Like pressure and dizziness</Text>
          </View>
          <Image source={require('../../assets/user-avatar.png')} style={styles.avatar} />
        </View>

        <View style={styles.botMessage}>
          <Image source={require('../../assets/ia-icon.png')} style={styles.avatar} />
          <View style={styles.messageBubbleBot}>
            <Text style={styles.messageText}>If you have a lot of pressure, I recommend going to the doctor.</Text>
          </View>
        </View>

        <View style={styles.userMessage}>
          <View style={styles.messageBubbleUser}>
            <Text style={styles.messageText}>But what do you recommend I do?</Text>
          </View>
          <Image source={require('../../assets/user-avatar.png')} style={styles.avatar} />
        </View>

        <View style={styles.botMessage}>
          <Image source={require('../../assets/ia-icon.png')} style={styles.avatar} />
          <View style={styles.messageBubbleBot}>
            <Text style={styles.messageText}>You can:</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.doctorButton}>
                <Text style={styles.buttonText}>Doctor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pharmacyButton}>
                <Text style={styles.buttonText}>Pharmacy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#555"
        />
        <Image source={require('../../assets/ia-icon.png')} style={styles.sendIcon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DDF3F9', // Tono azul claro
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    marginRight: 8,
    fontSize: 16,
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  chatContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  botMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  userMessage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 5,
  },
  messageBubbleBot: {
    backgroundColor: '#c1f0f6',
    padding: 10,
    borderRadius: 16,
    maxWidth: '80%',
  },
  messageBubbleUser: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 16,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
    fontSize: 14,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  doctorButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  pharmacyButton: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
