import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './Login.stylesheet';
import ILogin from './Login.interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../Navigation/HomeStackNavigator';

const Login: FC<ILogin> = props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleLogin = () => {
    console.log('email', email);
  };

  const handleSignUp = () => {
    console.log('register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textsArea}>
        <Text style={styles.headerText}>Welcome Back!</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
          style={styles.textInput}
          maxLength={30}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          maxLength={100}
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />

        {isRegistered && (
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            maxLength={100}
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

        <TouchableOpacity style={styles.googleButton} onPress={props.onPress}>
          <Icon name="google" size={20} />
          <Text style={styles.googleText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpArea}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => setIsRegistered(true)}>
          <Text style={styles.signUpTextLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
