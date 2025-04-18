// src/styles/LoginScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00BCD4',
    marginBottom: 30,
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
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  registerLink: {
    color: '#00BCD4',
    fontWeight: '600',
  },
});
