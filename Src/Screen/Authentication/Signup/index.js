import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      let result = await fetch('http://10.0.2.2:5000/Registration/', {
        method: 'post',
        body: JSON.stringify({ name, username, password }),
        headers: {
          'Content-Type': 'application/json',
        }});
        if (result.ok) {
          alert("Successfully created account!");
          navigation.navigate('Login');
          result = await result.json();
          console.log(result);
        } else {
          const errorMessage = await result.text();
          setErrorMessage(errorMessage);
        }
      } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={setemail}
      value={email}
    />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  userDataContainer: {
    marginTop: 20,
  },
  userDataText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SignUpScreen;
