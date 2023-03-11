import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  newsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  newsContent: {
    fontSize: 16,
    textAlign: 'left',
    color: '#000',
  },
  writerText: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
    marginBottom: 15,
  },
  creatorandDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagsText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  tagText: {
    fontSize: 14,
    color: '#000',
  },
});

export default styles;
