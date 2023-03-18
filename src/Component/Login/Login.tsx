import React, {FC} from 'react';
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Welcome Back!</Text>
      <View style={styles.textsArea}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          inputMode="email"
        />
        <TextInput placeholder="Password" style={styles.textInput} />

        <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.googleText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={props.onPress}>
          <Icon name="google" size={20} />
          <Text style={styles.googleText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpArea}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.signUpTextLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
