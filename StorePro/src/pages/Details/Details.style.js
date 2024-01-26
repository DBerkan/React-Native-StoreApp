import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  desc: {
    fontSize: 16,
    fontStyle: 'italic',
    padding: 10,
  },
  price: {
    fontSize: 22,
    justifyContent: 'space-between',
    textAlign: 'right',
    marginRight: 15,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
