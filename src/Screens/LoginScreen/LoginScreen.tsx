import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import styles from './LoginScreen.stylesheet';
import Login from '../../Component/Login/Login';
import {useNavigation} from '@react-navigation/native';
import {WEB_CLIENT_ID} from '@env';
import {HomeStackParamsList} from '../../Navigation/HomeStackNavigator';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigation = useNavigation<HomeStackParamsList>();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  };

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  if (!user) {
    return <Login onPress={onGoogleButtonPress} />;
  }

  return <Text>{user.displayName}</Text>;
};

export default LoginScreen;
