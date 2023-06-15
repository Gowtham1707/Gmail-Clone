import firebase from 'firebase/compat/app';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAehVIWQSGD6JzQU28_w1Lzl6B0FH9t2ds",
  authDomain: "clone-471bc.firebaseapp.com",
  projectId: "clone-471bc",
  storageBucket: "clone-471bc.appspot.com",
  messagingSenderId: "1072413074357",
  appId: "1:1072413074357:web:682d25226594b584566ffc",
  measurementId: "G-LWDRYZ4D5M"
};


firebase.initializeApp(firebaseConfig);




const db = firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };