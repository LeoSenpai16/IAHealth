// src/styles/UpdateProfileStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3f7fa',
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    elevation: 2,
  },
  uploadButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  uploadText: {
    color: '#333',
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#00BCD4',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  updateText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
