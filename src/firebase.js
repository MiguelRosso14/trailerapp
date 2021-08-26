import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDCraSsUsonftYRj2kYFFvZw1D53QIVjkk",
  authDomain: "trailerlinks-941df.firebaseapp.com",
  projectId: "trailerlinks-941df",
  storageBucket: "trailerlinks-941df.appspot.com",
  messagingSenderId: "1095584648698",
  appId: "1:1095584648698:web:7f573503f09ea7be4fe843"
};
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();