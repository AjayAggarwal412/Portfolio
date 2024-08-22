import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaAtGX-t0pai8OFiOdmBBku1Ni4E2twm4",
  authDomain: "portfolio-d00dd.firebaseapp.com",
  projectId: "portfolio-d00dd",
  storageBucket: "portfolio-d00dd.appspot.com",
  messagingSenderId: "1062498024241",
  appId: "1:1062498024241:web:a14e6d9adb6c37a56d8e10",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
