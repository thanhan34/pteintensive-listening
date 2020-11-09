import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCuOnA0e-umkhwx1geoBxsY3ydAI3cllQM",
    authDomain: "pte-intensive-listening-mp3.firebaseapp.com",
    databaseURL: "https://pte-intensive-listening-mp3.firebaseio.com",
    projectId: "pte-intensive-listening-mp3",
    storageBucket: "pte-intensive-listening-mp3.appspot.com",
    messagingSenderId: "22036565467",
    appId: "1:22036565467:web:05877e0b0d6a770a226bfe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, storage, provider };
export default db;