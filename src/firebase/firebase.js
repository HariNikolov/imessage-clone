import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIoDMoodaZhSx5_EzkyHx65LTHh5TYyfc",
  authDomain: "imessage-clone-705db.firebaseapp.com",
  databaseURL: "https://imessage-clone-705db.firebaseio.com",
  projectId: "imessage-clone-705db",
  storageBucket: "imessage-clone-705db.appspot.com",
  messagingSenderId: "1027819535089",
  appId: "1:1027819535089:web:13380ccfc149aea20a8750",
  measurementId: "G-Z1PS3XV9TK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
