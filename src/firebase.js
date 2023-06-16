import firebase from 'firebase/compat/app';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = "Add Firebase config"


firebase.initializeApp(firebaseConfig);




const db = firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
