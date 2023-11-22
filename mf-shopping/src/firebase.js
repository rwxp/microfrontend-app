import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAVIJ_3U-1O-G0wj6eecueXB4C8R5AUC84",
  authDomain: "microfrontend-c77df.firebaseapp.com",
  databaseURL: "https://microfrontend-c77df-default-rtdb.firebaseio.com",
  projectId: "microfrontend-c77df",
  storageBucket: "microfrontend-c77df.appspot.com",
  messagingSenderId: "64920058461",
  appId: "1:64920058461:web:aa37534c5681a4f7e1ebb4",
  measurementId: "G-VLG2QWHZHC",
});

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase;

export { auth, storage, db, fs };
