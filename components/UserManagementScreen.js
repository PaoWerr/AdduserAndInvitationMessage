import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Auth } from 'aws-amplify';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const userList = await Auth.listUsers();
      setUsers(userList.Users);
    } catch (error) {
      console.log('Error fetching user list:', error);
    }
  };

  const addUser = async () => {
    try {
      // Generate a random username, password, and email for the new user
      const randomUsername = `user${Math.floor(Math.random() * 10000)}`;
      const randomPassword = `P@ssw0rd${Math.floor(Math.random() * 10000)}`;
      const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;
  
      // Register the new user
      await Auth.signUp({
        username: randomUsername,
        password: randomPassword,
        attributes: {
          email: randomEmail,
        },
      });
  
      // Fetch the updated user list
      fetchUserList();
    } catch (error) {
      console.log('Error adding user:', error);
    }
  };
  

  return (
    <View>
      <Button title="Add User" onPress={addUser} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.Username}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Username}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserManagementScreen;
