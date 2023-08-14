import React, {useState, createContext, FC, useContext, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamsList} from '../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
interface IUserAuthContext {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>;
  login: (email: string, password: string) => void;
  addUser: any;
  handleSignUp: any;
  logout: any;
}

export const UserAuthContext = createContext<IUserAuthContext>({
  user: null,
  setUser: () => {},
  login: (email: string, password: string) => {},
  addUser: (user: FirebaseAuthTypes.User) => {},
  handleSignUp: (email: string, password: string, rePassword: string) => {},
  logout: () => {},
});

export const UserAuthProvider: FC = ({children}: any) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        addUser: async (user: FirebaseAuthTypes.User) => {
          const userRef = firestore().collection('users').doc(user.uid);
          const snapshot = await userRef.get();
          if (!snapshot.exists) {
            const data = {
              id: user.uid,
              email: user.email,
              name: user.displayName,
              photoUrl: user.photoURL,
              dateCreated: new Date(),
            };
            await userRef.set(data);
          }
        },
        login: async (email: string, password: string) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(userCredential => {
                const user = userCredential.user;
                if (user) {
                  setUserInfo(user);
                  setIsLogin(true);
                }
              });
          } catch (error) {
            console.log('Cannot login user: ', error);
          }
        },
        handleSignUp: async (
          email: string,
          password: string,
          rePassword: string,
        ) => {
          try {
            if (email && password && rePassword) {
              if (password !== rePassword) {
                console.log('Password not match');
              } else {
                if (password.length < 6) {
                  console.log('Password must be at least 6 characters');
                } else {
                  await auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(userCredential => {
                      const user = userCredential.user;
                      if (user) {
                        setUserInfo(user);
                        setIsRegistered(false);
                      }
                    });
                }
              }
            }
          } catch (error) {
            console.log('Cannot register user: ', error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            // navigation.reset({
            //   index: 0,
            //   routes: [{name: 'Login'}],
            // });
          } catch (error) {
            console.log('Cannot logout user: ', error);
          }
        },
      }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => useContext(UserAuthContext);
