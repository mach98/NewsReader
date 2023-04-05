import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollStyle: {
    backgroundColor: '#fff',
  },
  drawerbackgroundImage: {
    padding: 20,
  },
  userAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 25,
    color: '#fff',
  },
  menuDivider: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 10,
  },
  menuTextIcon: {
    fontSize: 22,
    color: '#000',
  },
  menuTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
