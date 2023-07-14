import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleAddUser = () => {
    navigation.navigate('AddUser');
  };

  return (
    <View>
      <Text>Welcome to the Dashboard!</Text>
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

export default DashboardScreen;
