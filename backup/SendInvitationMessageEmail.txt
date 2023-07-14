import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import AWS from 'aws-sdk';



Amplify.configure({
  Auth: {
    region: awsExports.aws_cognito_region,
    userPoolId: awsExports.aws_user_pools_id,
    userPoolWebClientId: awsExports.aws_user_pools_web_client_id,
  },
});

const generatePassword = (length) => {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
  
  const SendInvitation = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
  
    const sendInvitation = async () => {
      const password = generatePassword(8);
      const cognito = new AWS.CognitoIdentityServiceProvider({
        region: awsExports.aws_cognito_region,
        accessKeyId: 'AKIAYT4HBJMSLPXUL5EQ',
        secretAccessKey: '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',
      });
  
      try {
        await cognito.adminCreateUser({
          UserPoolId: awsExports.aws_user_pools_id,
          Username: username,
          TemporaryPassword: password,
          UserAttributes: [
            {
              Name: 'email',
              Value: email,
            },
          ],
        }).promise();
  
        console.log('Invitation sent successfully!');
        console.log(`Your username is ${username} and temporary password is ${password}`);
      } catch (error) {
        console.log('Error sending invitation:', error);
      }
    };
    
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Send Invitation" onPress={sendInvitation} />
      </View>
    );
  };

export default SendInvitation;
