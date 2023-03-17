import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import styles from './LoginScreen.stylesheet';
import Login from '../../Component/Login/Login';

const LoginScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  return <Login />;
};

export default LoginScreen;
