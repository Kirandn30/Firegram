

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app' 
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVY7xxbdysnOZyuhXkDD53NFwX8JzNjOg",
  authDomain: "firegram-app-3b917.firebaseapp.com",
  projectId: "firegram-app-3b917",
  storageBucket: "firegram-app-3b917.appspot.com",
  messagingSenderId: "559838206266",
  appId: "1:559838206266:web:ce655a5e8296cb6149d803"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectStorage= firebase.storage();
const projectFirestore= firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};