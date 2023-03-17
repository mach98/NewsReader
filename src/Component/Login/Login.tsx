import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './Login.stylesheet';

const Login: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login Name</Text>
      <View style={styles.textsArea}>
        <View style={styles.textInputs}>
          <TextInput />
        </View>
        <View style={styles.textInputs}>
          {/* <TextInput
            secureTextEntry
            placeholder="Password"
            mode="outlined"
            right={<TextInput.Icon icon="eye" />}
          /> */}
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Log In</Text>
          <Icon name="github" size={20} color="#000" />
        </TouchableOpacity>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
