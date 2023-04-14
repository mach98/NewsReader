import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default interface ILogin {
  onPress: () => void;
  addUser: (user: FirebaseAuthTypes.User) => void;
}
