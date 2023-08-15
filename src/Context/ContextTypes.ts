import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface IUserAuthContext {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>;
  login: (email: string, password: string) => void;
  addUser: any;
  handleSignUp: any;
  logout: any;
}
