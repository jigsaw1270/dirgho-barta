import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDY0kVdauERaLA0Qmxg5TQeRmZe1j4lxPg",
    authDomain: "dirgho-batra.firebaseapp.com",
    projectId: "dirgho-batra",
    storageBucket: "dirgho-batra.appspot.com",
    messagingSenderId: "723670236181",
    appId: "1:723670236181:web:9bf19a6eb4f9045c07221c"
  }).auth();