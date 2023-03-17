import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Login.stylesheet';
import ILogin from './Login.interface';

const Login: FC<ILogin> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login Name</Text>
      <View style={styles.textsArea}>
        <View style={styles.textInputs}>
          <TextInput placeholder="Email" />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={props.onPress}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
