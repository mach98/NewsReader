import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './LoginScreen.stylesheet';

const LoginScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<string>();

  // Handle user state changes
  function onAuthStateChanged(user: string) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <View style={styles.textsArea}>
        <View style={styles.textInputs}>
          <Text>Email</Text>
          <TextInput />
        </View>
        <View style={styles.textInputs}>
          <Text>Password</Text>
          <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
