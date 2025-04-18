
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  details: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 15,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  sosButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 10,
    elevation: 5,
  },
  sosText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
