import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD4gTxW1ct00XvU4vJPH3dBe2ZAcXG_SC8",
    authDomain: "react-discord-31575.firebaseapp.com",
    projectId: "react-discord-31575",
    storageBucket: "react-discord-31575.appspot.com",
    messagingSenderId: "129759477347",
    appId: "1:129759477347:web:15a4d0b51f290c71e34256",
    measurementId: "G-Q7TTM9PRQH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db;