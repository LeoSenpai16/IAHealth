// src/styles/RegisterScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3f7fa',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  selectText: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    height: 45,
    elevation: 3,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#00BCD4',
    fontWeight: '600',
  },
});
