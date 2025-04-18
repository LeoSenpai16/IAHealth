import { StyleSheet } from 'react-native';

export const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#007bff',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  counter: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
