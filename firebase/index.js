import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDPtQ8XjLlWu-iX6kPpXZZqcsef-D3JtXg",
    authDomain: "lite-sklad.firebaseapp.com",
    projectId: "lite-sklad",
    storageBucket: "lite-sklad.appspot.com",
    messagingSenderId: "630839505847",
    appId: "1:630839505847:web:57e4d4b0c28c6707ef6e32",
    measurementId: "G-H57SW78XG0",
    appName: 'sklad'
  };
  const firebaseApp =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider =  new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};