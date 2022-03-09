import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCisHyrF-quKOXZXW-bTNPhq3gjZM5Gs24",
  authDomain: "book-tracker-76c6e.firebaseapp.com",
  projectId: "book-tracker-76c6e",
  storageBucket: "book-tracker-76c6e.appspot.com",
  messagingSenderId: "1082182195591",
  appId: "1:1082182195591:web:bf2731e4d9a651db5c5b22",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
