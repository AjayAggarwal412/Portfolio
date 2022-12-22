// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaAtGX-t0pai8OFiOdmBBku1Ni4E2twm4",
  authDomain: "portfolio-d00dd.firebaseapp.com",
  projectId: "portfolio-d00dd",
  storageBucket: "portfolio-d00dd.appspot.com",
  messagingSenderId: "1062498024241",
  appId: "1:1062498024241:web:a14e6d9adb6c37a56d8e10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
