// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL9dlIXtcNuWJEPQdMWaEK7Hj41bitA74",
  authDomain: "my-project-2cade.firebaseapp.com",
  projectId: "my-project-2cade",
  storageBucket: "my-project-2cade.firebasestorage.app",
  messagingSenderId: "777890667320",
  appId: "1:777890667320:web:b52642b5cfd0905abc3fcd",
  measurementId: "G-1XLGG54JTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);