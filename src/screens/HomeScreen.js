import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native"; 
import styles from '../Styles/HomeSyles';

export default function HomeScreen() {
  const navigation = useNavigation();
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
            <TouchableOpacity style={styles.doctorButton} onPress={() => navigation.navigate('SelectType')}>
              <Text style={styles.buttonText}>Doctor</Text>
            </TouchableOpacity>
              <TouchableOpacity style={styles.pharmacyButton} onPress={() => navigation.navigate('Pharmacy')}>
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


