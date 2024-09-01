/*
1. Create Project within https://console.firebase.google.com/
2. Navigate to https://console.firebase.google.com/project/<PROJECT_KEY>/settings/general/
3. Find 'SDK setup and configuration' OR 'firebaseConfig' text in the page.
4. Replace below firebaseConfig with yours.
*/

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_API_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_API_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);