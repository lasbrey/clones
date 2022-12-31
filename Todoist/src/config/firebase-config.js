import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu89ZF_eVVM6M4mkw4XHXGkIzCVoniUIk",
  authDomain: "todoist-fb85e.firebaseapp.com",
  projectId: "todoist-fb85e",
  storageBucket: "todoist-fb85e.appspot.com",
  messagingSenderId: "671611395261",
  appId: "1:671611395261:web:963397c8e93e0e6d172bd4",
  measurementId: "G-MFPT3T0QKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
