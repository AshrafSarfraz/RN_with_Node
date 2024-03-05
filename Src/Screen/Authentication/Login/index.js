import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = async () => {
    try {
      let result = await fetch('http://10.0.2.2:5000/Login/', {
        method: 'post',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (result.ok) {
        alert("Successfully Logged In");
      } else {
        const errorMessage = await result.text();
        if (result.status === 400 && errorMessage === 'User not found') {
          // If user not found, navigate to the sign-up screen
          navigation.navigate('SignUp');
        } else {
          // If other error occurred, display the error message
          setErrorMessage(errorMessage);
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
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
});

export default LoginScreen;
