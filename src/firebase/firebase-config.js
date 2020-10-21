import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBex13iF-TBobNITE44mMqgofUvfmySz8E',
  authDomain: 'react-journal-app-585a6.firebaseapp.com',
  databaseURL: 'https://react-journal-app-585a6.firebaseio.com',
  projectId: 'react-journal-app-585a6',
  storageBucket: 'react-journal-app-585a6.appspot.com',
  messagingSenderId: '909028421543',
  appId: '1:909028421543:web:0edf21441b9e3774869082',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
