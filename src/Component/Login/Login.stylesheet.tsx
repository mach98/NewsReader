import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  textsArea: {
    marginTop: '20%',
    marginHorizontal: 20,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  googleText: {
    fontSize: 20,
    marginLeft: 5,
  },
  googleButton: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    top: '20%',
  },
  signUpText: {
    fontSize: 20,
  },
  signUpTextLink: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginLeft: 7,
  },
});

export default styles;
