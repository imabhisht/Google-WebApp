import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDSx2_WiUzMZ_wh5iKSVNqjc6JCSaW1pjI",
    authDomain: "search-alpha-1617963959116.firebaseapp.com",
    projectId: "search-alpha-1617963959116",
    storageBucket: "search-alpha-1617963959116.appspot.com",
    messagingSenderId: "728627206637",
    appId: "1:728627206637:web:c5d8e8287bb6fdc1bfefe4",
    measurementId: "G-5J4MV820MJ"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

//   const auth = app.auth();
//   const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db };
  