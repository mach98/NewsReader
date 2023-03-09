import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  newsBox: {
    width: '100%',
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  newsTitle: {
    fontWeight: '600',
    marginBottom: 3,
    textAlign: 'center',
    color: '#161716',
  },
  newsDescription: {
    fontStyle: 'italic',
  },
});

export default styles;
