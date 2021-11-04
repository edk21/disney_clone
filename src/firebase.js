import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: 'AIzaSyCSi-VlRoOiLu-yKBDOmghSKA6NzfQ3BGw',
//   authDomain: 'disney-clone-e0b6d.firebaseapp.com',
//   projectId: 'disney-clone-e0b6d',
//   storageBucket: 'disney-clone-e0b6d.appspot.com',
//   messagingSenderId: '398805751052',
//   appId: '1:398805751052:web:feb19c4553eba212a8a529',
//   measurementId: 'G-44SY0BBXNM',
// };
const firebaseConfig = {
  apiKey: "AIzaSyCRt4-NxaK6zG4J0exQdqCpzfjrh5hojtg",
  authDomain: "disney-clone-ae3f0.firebaseapp.com",
  projectId: "disney-clone-ae3f0",
  storageBucket: "disney-clone-ae3f0.appspot.com",
  messagingSenderId: "610697588400",
  appId: "1:610697588400:web:6602a728d8f4c006fd9575",
  measurementId: "G-5SPXGM1CJG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const database = firebase.database()

export { auth, provider, storage, database };
export default db;