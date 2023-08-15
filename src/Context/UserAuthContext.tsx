import React, {useState, createContext, FC, useContext, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {IUserAuthContext} from './ContextTypes';

type Props = {
  children?: React.ReactNode;
};
export const UserAuthContext = createContext<IUserAuthContext | undefined>({
  user: null,
  setUser: () => {},
  login: (email: string, password: string) => {},
  addUser: (user: FirebaseAuthTypes.User) => {},
  handleSignUp: (email: string, password: string, rePassword: string) => {},
  logout: () => {},
});

export const UserAuthProvider: FC<Props> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const addUser = async (user: FirebaseAuthTypes.User) => {
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
  };

  const login = async (email: string, password: string) => {
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
  };

  const handleSignUp = async (
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
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('Cannot logout user: ', error);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return subscriber;
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        addUser,
        login,
        handleSignUp,
        logout,
      }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthContext = () => useContext(UserAuthContext);
