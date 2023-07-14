import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';


const CustomSignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  };

  const handleSignUp = async () => {
    if (username.trim() === '') {
      console.log('Username cannot be empty');
      return;
    }

    try {
      const newUser = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log('New user:', newUser);
      // Handle successful user registration
    } catch (error) {
      console.log('Error:', error);
      // Handle error during user registration
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await API.post('MyApiName', '/users', {
        body: {
          username: 'newUser',
          password: 'newPassword',
        },
      });
      console.log('New user added:', response);
      // Handle successful user creation
    } catch (error) {
      console.log('Error adding user:', error);
      // Handle error during user creation
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />

      {user && (
        <Button
          title="Add New User"
          onPress={handleAddUser}
        />
      )}
    </View>
  );
};

export default CustomSignUp;
