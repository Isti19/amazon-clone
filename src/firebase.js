// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDjy292xtahdvRbQ-MknpHHICyNKTEETU8',
  authDomain: 'clone-646ab.firebaseapp.com',
  projectId: 'clone-646ab',
  storageBucket: 'clone-646ab.appspot.com',
  messagingSenderId: '989750458812',
  appId: '1:989750458812:web:4c59286dc70974d7acd3b9',
  measurementId: 'G-3GJF2YGK7R',
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
