import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import React, {useEffect, useState, FC} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Login from '../../Component/Login/Login';
import {useNavigation} from '@react-navigation/native';
import {WEB_CLIENT_ID} from '@env';
import {HomeStackParamsList} from '../../types/navigationTypes';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LoginScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

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
      if (userState) {
        addUser(userState);
        navigation.navigate('Home');
      }

      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  if (!user) return <Login onPress={onGoogleButtonPress} addUser={addUser} />;

  navigation.navigate('Home');
};

export default LoginScreen;
