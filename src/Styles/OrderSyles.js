import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
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
  totalUnit: {
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'column',
  },
  totalLabel: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
