// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-dWhTi0jgtIGpVbIEHgp9VpVW1-zCB8",
  authDomain: "computersmax-cfd2d.firebaseapp.com",
  projectId: "computersmax-cfd2d",
  storageBucket: "computersmax-cfd2d.appspot.com",
  messagingSenderId: "173347829573",
  appId: "1:173347829573:web:011791397604e420ce702c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
