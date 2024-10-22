// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_POT,
  storageBucket: import.meta.env.VITE_STY,
  messagingSenderId: import.meta.env.VITE_MESS,
  appId: import.meta.env.VITE_AID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;