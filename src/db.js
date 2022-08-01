// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_DRiZ0OXOktECKUFBon0vTy9XA1W8lfc",
  authDomain: "contact-book-490f7.firebaseapp.com",
  projectId: "contact-book-490f7",
  storageBucket: "contact-book-490f7.appspot.com",
  messagingSenderId: "77709643949",
  appId: "1:77709643949:web:93bac4a0374ab38a4af624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db