import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Check if entered credentials match the default admin credentials
    if (username === 'admin' && password === 'admin123') {
      setLoggedIn(true);
      navigation.navigate('Dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};



export default LoginScreen;
