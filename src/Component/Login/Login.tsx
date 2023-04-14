import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './Login.stylesheet';
import ILogin from './Login.interface';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const Login: FC<ILogin> = ({addUser, onPress}: ILogin) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User | null>(null);

  const handleLogin = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          if (user) {
            setUserInfo(user);
            addUser(user);
            setIsLogin(true);
          }
        });
    } catch (error) {
      console.log('Cannot login user: ', error);
    }
  };

  const handleSignUp = async () => {
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
                addUser(user);
                setIsRegistered(false);
              }
            })
            .catch(error => {
              console.log('Cannot register user: ', error);
            });
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textsArea}>
        <Text style={styles.headerText}>
          {isRegistered ? 'Create Account' : 'Welcome Back!'}
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
          style={styles.textInput}
          maxLength={30}
          autoComplete="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          maxLength={100}
          autoCapitalize="none"
          autoComplete="off"
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />

        {isRegistered && (
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            maxLength={100}
            autoCapitalize="none"
            autoComplete="off"
            value={rePassword}
            onChangeText={val => setRePassword(val)}
            secureTextEntry={true}
          />
        )}

        <TouchableOpacity
          style={styles.loginButton}
          onPress={isRegistered ? handleSignUp : handleLogin}>
          <Text style={styles.googleText}>
            {isRegistered ? 'Sign In' : 'Login'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={onPress}>
          <Icon name="google" size={20} />
          <Text style={styles.googleText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpArea}>
        <Text style={styles.signUpText}>
          {isRegistered ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <TouchableOpacity onPress={() => setIsRegistered(!isRegistered)}>
          <Text style={styles.signUpTextLink}>
            {isRegistered ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
