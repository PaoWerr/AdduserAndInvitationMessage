import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AddUserScreen = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAddUser = () => {
    // Validate the input
    if (newUsername.trim() === '' || newPassword.trim() === '') {
      Alert.alert('Error', 'Please enter a username and password');
      return;
    }

    // Store the new user's credentials
    const newUser = {
      username: newUsername,
      password: newPassword,
    };

    // Perform your desired logic with the new user, such as saving to a database or updating state
    console.log('New User:', newUser);

    // Clear the input fields
    setNewUsername('');
    setNewPassword('');

    // Show a success message
    Alert.alert('Success', 'User added successfully');
  };

  return (
    <View>
      <TextInput
        placeholder="New Username"
        value={newUsername}
        onChangeText={text => setNewUsername(text)}
      />
      <TextInput
        placeholder="New Password"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

export default AddUserScreen;
