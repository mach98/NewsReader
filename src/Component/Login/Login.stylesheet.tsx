import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputs: {
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 2,
  },
  textsArea: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
