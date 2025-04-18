// src/styles/HomeScreen.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#DDF3F9',
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
