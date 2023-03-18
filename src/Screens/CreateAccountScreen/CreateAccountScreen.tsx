import {SafeAreaView} from 'react-native-safe-area-context';
import React, {FC, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './CreateAccountScreen.stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const CreateAccountScreen: FC = () => {
  const [fullName, setFullName] = useState<FirebaseAuthTypes.User | ''>('');
  const [email, setEmail] = useState<FirebaseAuthTypes.User | ''>('');
  const [password, setPassword] = useState<FirebaseAuthTypes.User | ''>('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textsArea}>
        <Text style={styles.headerText}>Create Account</Text>
        <TextInput placeholder="Full Name" style={styles.textInput} />
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
        <TextInput placeholder="Confirm Password" style={styles.textInput} />
        <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
          <Text style={styles.signUpText}>Login</Text>
          <Icon name="arrowright" size={20} style={styles.signUpTextArrow} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
