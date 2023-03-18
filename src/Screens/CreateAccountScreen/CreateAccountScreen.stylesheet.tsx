import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  signUpButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 20,
    marginLeft: 5,
  },
  signUpTextArrow: {
    marginLeft: 5,
  },
  textsArea: {
    marginTop: '40%',
    marginHorizontal: 20,
  },
  textInput: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default styles;
