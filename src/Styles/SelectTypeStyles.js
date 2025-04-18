import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6f6fb', 
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  cardImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft: 15,
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