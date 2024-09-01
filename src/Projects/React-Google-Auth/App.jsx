import React, { useState } from 'react';
import { signInWithGoogle } from './FirebaseConfig';

const ReactGoogleAuth = () => {
  const currentTime = new Date().getTime();
  const storedDetails = JSON.parse(localStorage.getItem("userDetails")) ?? {
    displayName: '',
    email: '',
    photoURL: '',
    expirationTime: currentTime
  };

  const [userDetails, setUserDetails] = useState(storedDetails);

  const signIn = async () => {
    try {
      const result = await signInWithGoogle();
      const userResult = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        expirationTime: result.user.stsTokenManager.expirationTime
      };
      localStorage.setItem("userDetails", JSON.stringify(userResult));
      setUserDetails(userResult);
    }
    catch (e) {
      console.log(e);
    };
  };


  const singOut = () => {
    localStorage.removeItem("userDetails");
    setUserDetails({});
  };

  return (
    <div className="mt-16 p-2 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10 p-2 space-y-6 w-152 rounded-xl overflow-hidden border border-gray-200 shadow bg-orange-200">
        <h1 className="text-center text-4xl">React Google Auth</h1>
        <h3 className="text-center text-base">Facilitates a secure login process by allowing users to authenticate their identity through their Google account, ensuring both ease of access and enhanced security.</h3>
        {userDetails.expirationTime - currentTime > 0
          ? <div className='flex sm:flex-col justify-center items-center flex-row gap-8'>
            <img className='w-20 rounded-full' src={userDetails.photoURL} />
            <h1 className='text-blue-950 font-bold'> Welcome {userDetails.displayName} !!</h1>
            <button
              className="flex flex-row gap-1 justify-center items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1"
              onClick={singOut}> Logout </button>
          </div>
          : <button
            className="flex flex-row gap-1 justify-center items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={signIn}>
            Sign in with Google
          </button>
        }
      </div>
    </div>
  );
}

export default ReactGoogleAuth;
