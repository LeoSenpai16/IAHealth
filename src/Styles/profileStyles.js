// src/styles/ProfileStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f7fa',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00BCD4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
