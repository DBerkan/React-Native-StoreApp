import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width / 2 - 40,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  price_body_container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  price: {
    fontSize: 19,
    color: 'grey',
    textAlign: 'center',
  },
  inner_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
