// src/styles/ProductDetailStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityNumber: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
