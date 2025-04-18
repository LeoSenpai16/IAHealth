import { StyleSheet } from 'react-native';

export const confirmVisitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    position: 'absolute',
    bottom: 140,
    left: 16,
    right: 16,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 8,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  name: {
    fontSize: 15,
    color: '#000',
  },
  info: {
    fontSize: 13,
    color: '#666',
  },
  priceContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    color: '#555',
    fontSize: 13,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  total: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  confirmButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});