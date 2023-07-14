import React, { useEffect } from 'react';
import AWS from 'aws-sdk';
import Amplify from 'aws-amplify';
import awsExports from '../src/aws-exports';

Amplify.configure(awsExports);

const invokeLambdaFunction = () => {
  const lambda = new AWS.Lambda();

  const lambdaParams = {
    FunctionName: 'callfunction',
    Payload: JSON.stringify({ name: 'paolo' }),
  };

  lambda.invoke(lambdaParams, (error, data) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Lambda function response:', data);
    }
  });
};

const call = () => {
  useEffect(() => {
    invokeLambdaFunction();
  }, []);

  return (
    // Your app's UI components and structure
    <></>
  );
};

export default call;
