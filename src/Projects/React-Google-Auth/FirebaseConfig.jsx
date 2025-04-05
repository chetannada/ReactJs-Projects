/*
### Steps to setup Firebase and Google Authentication
1. Go to the Firebase Console https://console.firebase.google.com/ and create a new project.
2. Enable Google Authentication in the "Authentication" section.
3. Add a Web App to Your Project, On the Project Overview page, click on the "Add App" icon (</> symbol for a web app).
4. Provide a nickname for your app (e.g., "React Auth App") and click "Register App".
5. Now go to the "Build" section on the left sidebar and select "Authentication".
6. Find Google in the list of providers and Enter your Project Support Email.
7. Replace below "firebaseConfig" with yours API keys.
*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain:
    import.meta.env.VITE_API_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_API_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket:
    import.meta.env.VITE_API_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId:
    import.meta.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID ||
    "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_API_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId:
    import.meta.env.VITE_API_FIREBASE_MEASURENEMNT_ID || "YOUR_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
