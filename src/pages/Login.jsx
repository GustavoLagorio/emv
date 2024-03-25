import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const { signIn, loaded } = useGoogleLogin({
    clientId: '309513572301-370vm8smlo8a0fe6sar6u0jaej0od3qk.apps.googleusercontent.com',
    onSuccess,
    onFailure,
  });

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <button onClick={signIn}>Sign in with Google</button>
  );
}

export default GoogleLoginButton;